import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

import { Grid, TextField } from 'components'
import { cn } from 'utils'

const SuggestionsList = ({ suggestions, selectedIndex, onSuggestionClick, inputRect }) => {
  const listRef = useRef(null)

  useEffect(() => {
    if (listRef.current && selectedIndex >= 0) {
      const selectedElement = listRef.current.children[selectedIndex]
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [selectedIndex])

  if (!inputRect) return null

  return createPortal(
    <ul
      ref={listRef}
      className='fixed z-1352 bg-background border border-input rounded-md mt-1 max-h-60 overflow-auto shadow-lg'
      style={{
        top: `${inputRect.bottom}px`,
        left: `${inputRect.left}px`,
        width: `${inputRect.width}px`
      }}
      role='listbox'
    >
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          onClick={() => onSuggestionClick(suggestion)}
          className={cn(
            'px-3 py-2 cursor-pointer',
            index === selectedIndex ? 'bg-accent text-accent-foreground' : 'hover:bg-accent hover:text-accent-foreground'
          )}
          role='option'
          aria-selected={index === selectedIndex}
        >
          {suggestion}
        </li>
      ))}
    </ul>,
    document.body
  )
}

const AutocompleteForm = ({
  size = 6,
  label,
  onChange,
  autoFocus = false,
  inputRef,
  variant = 'standard',
  options,
  value,
  name,
  disableClearable = false,
  className,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState(value || '')
  const [suggestions, setSuggestions] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [inputRect, setInputRect] = useState(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    setInputValue(value || '')
  }, [value])

  const updateInputRect = () => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect()
      setInputRect(rect)
    }
  }

  const handleInputChange = (event) => {
    const newValue = event.target.value
    setInputValue(newValue)
    onChange(newValue)

    const filteredSuggestions = options.filter(option =>
      option.toLowerCase().includes(newValue.toLowerCase())
    )
    setSuggestions(filteredSuggestions)
    setIsOpen(true)
    setSelectedIndex(-1)
    updateInputRect()
  }

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion)
    onChange(suggestion)
    setIsOpen(false)
  }

  const handleClear = () => {
    if (!disableClearable) {
      setInputValue('')
      onChange('')
      setIsOpen(false)
    }
  }

  const handleKeyDown = (event) => {
    if (isOpen) {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault()
          setSelectedIndex(prevIndex =>
            prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
          )
          break
        case 'ArrowUp':
          event.preventDefault()
          setSelectedIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0))
          break
        case 'Enter':
          if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
            event.preventDefault()
            handleSuggestionClick(suggestions[selectedIndex])
          }
          break
        case 'Escape':
          setIsOpen(false)
          break
      }
    }
  }

  const handleBlur = () => {
    // Delay closing to allow for suggestion click
    setTimeout(() => setIsOpen(false), 200)
  }

  return (
    <Grid
      item
      md={size}
      xs={12}
    >
      <div ref={wrapperRef} className={cn('relative', className)}>
        <TextField
          name={name}
          label={label}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={updateInputRect}
          onBlur={handleBlur}
          autoFocus={autoFocus}
          inputRef={inputRef}
          className={cn(
            'peer',
            variant === 'outlined' && 'border rounded-md px-3 py-2',
            className
          )}
          {...rest}
        />
        {!disableClearable && inputValue && (
          <button
            type='button'
            onClick={handleClear}
            className='absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground'
          >
            ×
          </button>
        )}
        {isOpen && suggestions.length > 0 && (
          <SuggestionsList
            suggestions={suggestions}
            selectedIndex={selectedIndex}
            onSuggestionClick={handleSuggestionClick}
            inputRect={inputRect}
          />
        )}
      </div>
    </Grid>
  )
}

AutocompleteForm.propTypes = {
  size: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  variant: PropTypes.oneOf(['standard', 'outlined']),
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  disableClearable: PropTypes.bool,
  autoFocus: PropTypes.bool,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ]),
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string
}

export default AutocompleteForm
