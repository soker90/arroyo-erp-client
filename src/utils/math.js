/**
 * Safely evaluate a basic arithmetic expression without using `eval`.
 *
 * Supports decimal numbers and the `+`, `-`, `*`, `/` operators, parentheses
 * and unary plus/minus. Returns `null` when the expression is empty or invalid.
 *
 * @param {String|Number} expression
 * @returns {Number|null}
 */
export const evalArithmetic = (expression) => {
  if (expression === null || expression === undefined) return null

  const input = String(expression).trim()
  if (!input) return null

  // Only allow digits, whitespace, decimal points and arithmetic operators.
  if (!/^[\d\s.+\-*/()]+$/.test(input)) return null

  let pos = 0

  const peek = () => input[pos]
  const skipSpaces = () => { while (/\s/.test(input[pos])) pos++ }

  const parseExpression = () => {
    let value = parseTerm()
    skipSpaces()
    while (peek() === '+' || peek() === '-') {
      const op = peek()
      pos++
      const right = parseTerm()
      value = op === '+' ? value + right : value - right
      skipSpaces()
    }
    return value
  }

  const parseTerm = () => {
    let value = parseFactor()
    skipSpaces()
    while (peek() === '*' || peek() === '/') {
      const op = peek()
      pos++
      const right = parseFactor()
      value = op === '*' ? value * right : value / right
      skipSpaces()
    }
    return value
  }

  const parseFactor = () => {
    skipSpaces()
    const char = peek()

    if (char === '+') { pos++; return parseFactor() }
    if (char === '-') { pos++; return -parseFactor() }

    if (char === '(') {
      pos++
      const value = parseExpression()
      skipSpaces()
      if (peek() !== ')') throw new Error('Unbalanced parentheses')
      pos++
      return value
    }

    const match = input.slice(pos).match(/^\d*\.?\d+/)
    if (!match) throw new Error('Invalid number')
    pos += match[0].length
    return parseFloat(match[0])
  }

  try {
    const result = parseExpression()
    skipSpaces()
    if (pos !== input.length) return null
    return Number.isFinite(result) ? result : null
  } catch {
    return null
  }
}
