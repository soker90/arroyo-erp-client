import { useEffect, forwardRef, useState } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

import { cn } from 'utils'

const Checkbox = forwardRef(({
  className,
  checked,
  defaultChecked,
  onChange,
  indeterminate,
  disabled,
  size = 'medium',
  ...props
}, ref) => {
  const [isChecked, setIsChecked] = useState(defaultChecked || false)

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked)
    }
  }, [checked])

  const handleChange = (checked) => {
    if (onChange) {
      onChange({ target: { checked } }, checked)
    }
    if (checked !== undefined) {
      setIsChecked(checked)
    }
  }

  const sizeClasses = {
    small: 'h-3 w-3',
    medium: 'h-4 w-4',
    large: 'h-5 w-5'
  }

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'peer shrink-0 rounded-sm border border-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        sizeClasses[size],
        className
      )}
      checked={isChecked}
      onCheckedChange={handleChange}
      disabled={disabled}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        {indeterminate
          ? (
            <div className={cn('bg-current', sizeClasses[size].replace('h-', 'h-[2px] ').replace('w-', 'w-2/3 '))} />
            )
          : (
            <Check className={sizeClasses[size]} />
            )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})

Checkbox.displayName = 'Checkbox'

export { Checkbox }
