import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from 'utils'

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = ({ children, title, disabled = false }) => {
  if (disabled) {
    return children
  }

  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipContent>{title}</TooltipContent>
    </TooltipPrimitive.Root>
  )
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  disabled: PropTypes.bool
}

const TooltipContent = forwardRef(({ className, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    side='bottom'
    align='center'
    className={cn(
      'z-50 overflow-hidden rounded-md border border-gray-200 dark:border-gray-600 bg-gray-500 dark:bg-gray-700 px-3 py-1.5 text-sm text-white shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2',
      className
    )}
    {...props}
  />
))

TooltipContent.propTypes = {
  className: PropTypes.string
}

TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipProvider }
