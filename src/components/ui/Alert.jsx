import { cva } from 'class-variance-authority'
import { AlertCircle } from 'react-feather'

import { cn } from 'utils'

const alertVariants = cva(
  'relative w-full rounded-lg p-4 [&>svg~*]:pl-8 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 text-foreground text-sm',
  {
    variants: {
      severity: {
        success: 'bg-success/10 dark:bg-success/20',
        error: 'bg-destructive text-destructive-foreground'
      }
    },
    defaultVariants: {
      severity: 'error'
    }
  }
)

const Alert = ({ className, variant, severity, ...props }) => (
  <div
    role='alert'
    className={cn(alertVariants({ severity }), className)}
    {...props}
  >
    {severity === 'error' && <AlertCircle size='20' />}
    <div
      className='font-bold'
      {...props}
    />
  </div>
)
Alert.displayName = 'Alert'

export { Alert }
