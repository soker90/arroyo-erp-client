/**
 * Diff > 0 darkgreen
 * Diff < 0 red
 * Diff === 0 false
 * @param diff
 * @return {string}
 * @private
 */
export const diffColor = diff => !!diff && (diff > 0 ? 'darkgreen' : 'red');
