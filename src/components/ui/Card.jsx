import { cn } from 'utils'
import { forwardRef } from 'react'

const Card = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('rounded-lg bg-card text-card-foreground shadow-sm pb-1.5', className)}
    {...props}
  />
))
Card.displayName = 'Card'

const CardHeader = forwardRef(({ className, title, action, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-row p-2 px-4 items-center', className)}
    {...props}
  >
    {title && <CardTitle className='py-2'>{title}</CardTitle>}
    {action && <div className='ml-auto py-1'>{action}</div>}
  </div>
))
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-4 pt-4', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardActions = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-2 gap-4', className)}
    {...props}
  />
))
CardActions.displayName = 'CardActions'

export { Card, CardHeader, CardActions, CardTitle, CardDescription, CardContent }
