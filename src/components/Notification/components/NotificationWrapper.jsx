import { CheckCircle, XCircle, Info, AlertTriangle, X } from 'lucide-react'

const NotificationWrapper = (
  {
    ref,
    className,
    message,
    onClose,
    variant,
    ...other
  }
) => {
  const variantIcon = {
    success: CheckCircle,
    warning: AlertTriangle,
    error: XCircle,
    info: Info
  }

  const variantColors = {
    success: 'bg-green-600',
    warning: 'bg-orange-600',
    error: 'bg-red-600',
    info: 'bg-blue-600'
  }

  const Icon = variantIcon[variant]

  return (
    <div
      ref={ref}
      className={`${variantColors[variant]} text-white p-4 rounded-md shadow-lg flex items-center justify-between ${className}`}
      role='alert'
      {...other}
    >
      <span className='flex items-center' data-cy='notification'>
        <Icon className='h-5 w-5 mr-2' />
        {message}
      </span>
      <button
        onClick={onClose}
        className='ml-4 text-white hover:text-gray-200 focus:outline-hidden'
        aria-label='close'
        data-cy='notification-btn-close'
      >
        <X className='h-5 w-5' />
      </button>
    </div>
  )
}

NotificationWrapper.displayName = 'NotificationWrapper'

export default NotificationWrapper
