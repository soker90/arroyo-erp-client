import { cn } from 'utils'

const Container = ({ className, maxWidth, ...props }) => (
  <div className={cn('px-4 ', maxWidth && 'container', className)} {...props} />)

export { Container }
