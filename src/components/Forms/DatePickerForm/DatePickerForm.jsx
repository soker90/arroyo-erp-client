import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { es } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'

import { Button, Grid, TextField, Popover, PopoverContent, PopoverTrigger } from 'components'
import { format } from 'utils'

const DatePickerForm = ({
  size = 6,
  variant = 'standard',
  autoOk = true,
  value,
  disabled,
  clearable,
  label,
  onChange,
  disableFuture,
  readOnly = false,
  open: initialOpen = false,
  ...rest
}) => {
  const [date, setDate] = useState(value)
  const [open, setOpen] = useState(initialOpen)
  const inputRef = useRef()

  useEffect(() => {
    setDate(value)
  }, [value])

  useEffect(() => {
    setOpen(initialOpen)
  }, [initialOpen])

  const handleDateChange = (newDate) => {
    setDate(newDate)
    onChange(newDate)
    if (autoOk) {
      setOpen(false)
      inputRef.current?.focus()
    }
  }

  const handleClear = () => {
    setDate(null)
    onChange(null)
    setOpen(false)
    inputRef.current?.focus()
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 32) {
      setOpen(true)
    }
  }

  return (
    <Grid
      item
      md={size}
      xs={12}
    >
      <Popover open={open && !readOnly} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className='relative'>
            <TextField
              value={date ? format.date(date) : ''}
              disabled={disabled}
              label={label}
              readOnly
              onKeyDown={handleKeyDown}
              inputRef={inputRef}
              {...rest}
            />
            <Calendar className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
          </div>
        </PopoverTrigger>
        <PopoverContent className='p-0 w-full'>
          <DayPicker
            mode='single'
            selected={date}
            onSelect={handleDateChange}
            disabled={disableFuture ? (date) => date > new Date() : undefined}
            showOutsideDays
            autoFocus
            locale={es}
            classNames={{
              months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
              month: 'space-y-4',
              day_range_end: 'day-range-end',
              caption: 'flex justify-center pt-1 relative items-center',
              caption_label: 'font-medium m-auto',
              nav: 'space-x-1 absolute',
              nav_button: 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
              nav_button_previous: 'absolute left-1',
              nav_button_next: 'absolute right-1',
              table: 'w-full border-collapse space-y-1',
              head_row: 'flex',
              head_cell: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
              row: 'flex w-full mt-2',
              cell: 'text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
              day: 'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
              day_selected: 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
              day_today: 'bg-accent text-accent-foreground',
              day_outside: 'text-muted-foreground opacity-50',
              day_disabled: 'text-muted-foreground opacity-50',
              day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
              day_hidden: 'invisible',
              outside: 'text-muted-foreground opacity-50'
            }}
            components={{
              IconLeft: ({ ...props }) => <ChevronLeft className='h-4 w-4' />,
              IconRight: ({ ...props }) => <ChevronRight className='h-4 w-4' />
            }}
          />
          <div className='flex justify-end space-x-2 p-2 border-t'>
            {clearable && (
              <Button variant='outline' size='sm' onClick={handleClear}>
                Limpiar
              </Button>
            )}
            <Button variant='outline' size='sm' onClick={() => setOpen(false)}>
              Cancelar
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </Grid>
  )
}

DatePickerForm.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date), PropTypes.number, PropTypes.object]),
  onChange: PropTypes.func.isRequired,
  disableFuture: PropTypes.bool,
  size: PropTypes.number,
  autoOk: PropTypes.bool,
  clearable: PropTypes.bool,
  variant: PropTypes.string,
  closeOnSelect: PropTypes.bool,
  disabled: PropTypes.bool,
  open: PropTypes.bool,
  autoFocus: PropTypes.bool
}

export const story = DatePickerForm
export default DatePickerForm
