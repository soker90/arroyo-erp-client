import { Fragment } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { Link as RouterLink } from 'react-router-dom'

import { cn } from 'utils'
import PropTypes from 'prop-types'

const VARIANTS = {
  variant: {
    default: 'bg-primary text-white hover:bg-primary/90',
    contained: 'bg-primary text-white hover:bg-primary/90',
    destructive:
      'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline:
      'border border-input bg-background hover:bg-accent text-secondary',
    outlined:
      'border border-input bg-foreground/10 hover:bg-accent-foreground/20 text-secondary',
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
    true: 'opacity-50 pointer-events-none',
    false: ''
  }
}

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase',
  {
    variants: VARIANTS,
    defaultVariants: {
      variant: 'default',
      size: 'default',
      disabled: false
    }
  }
)

const Loading = () => (
  <svg
    className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none'
    viewBox='0 0 24 24'
  >
    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4' />
    <path
      className='opacity-75' fill='currentColor'
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
    />
  </svg>
)

const Button = ({
  className,
  variant,
  size,
  disabled,
  to,
  asChild = false,
  isLoading = false,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'
  const Link = to ? RouterLink : Fragment

  const isLink = !!to

  if (isLink) {
    return (
      <Link
        to={to} disabled={disabled} className={cn(buttonVariants({ variant, size, disabled, className }))}
        {...props}
      />
    )
  }

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, disabled, className }))}
      disabled={disabled}
      {...props}
    >
      <>
        {isLoading && <Loading />}
        {props.children}
      </>
    </Comp>
  )
}

Button.displayName = 'Button'

Button.propTypes = {
  variant: PropTypes.oneOf(Object.keys(VARIANTS.variant)),
  size: PropTypes.oneOf(Object.keys(VARIANTS.size)),
  disabled: PropTypes.bool,
  to: PropTypes.string,
  asChild: PropTypes.bool,
  isLoading: PropTypes.bool
}

export default Button
