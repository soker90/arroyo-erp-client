import { forwardRef, Fragment } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { Link as RouterLink } from 'react-router-dom'

import { cn } from 'utils'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/90',
        contained: 'bg-primary text-white hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent text-secondary',
        outlined:
          'border border-input bg-background hover:bg-accent text-secondary',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground text-default',
        ghosted: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        text: 'text-primary underline-offset-4'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        full: 'w-full h-10 px-4 py-2',
        small: 'h-9 rounded-md px-3', // legacy
        large: 'h-11 rounded-md px-8' // legacy
      },
      disabled: {
        true: 'opacity-50',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      disabled: false
    }
  }
)

const Button = forwardRef(({ className, variant, size, disabled, to, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  const Link = to ? RouterLink : Fragment

  const isLink = !!to

  if (isLink) {
    return (
      <Link
        to={to} disabled={disabled} className={cn(buttonVariants({ variant, size, disabled, className }))}
        ref={ref} {...props}
      />
    )
  }

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, disabled, className }))}
      ref={ref}
      disabled={disabled}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export default Button
