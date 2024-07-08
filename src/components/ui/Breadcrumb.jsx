import { ChevronRight } from 'lucide-react'
import { Children } from 'react'
import { Link } from 'react-router-dom'

import { cn } from 'utils'
import { Typography } from './index.js'

const Breadcrumb = ({ className, children }) => (
  <nav aria-label='breadcrumb'>
    <ol
      className={cn(
        'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
        className
      )}
    >
      {Children.map(children, (child, index) => (
        <>
          {!!index && <BreadcrumbSeparator />}
          {child}
        </>
      ))}
    </ol>
  </nav>
)

const BreadcrumbItem = ({ children }) => (
  <li
    className='inline-flex items-center gap-1.5'
  >
    {children}
  </li>
)

const BreadcrumbLink = ({ children, to }) => (
  <BreadcrumbItem>
    <Link to={to}>
      <Typography
        variant='body1'
        className='transition-colors text-muted-foreground hover:text-foreground'
      >
        {children}
      </Typography>
    </Link>
  </BreadcrumbItem>
)

const BreadcrumbPage = ({ children }) => (
  <BreadcrumbItem>

    <Typography
      role='link'
      aria-disabled='true'
      aria-current='page'
      variant='body1'
      className='font-normal text-foreground'
    >
      {children}
    </Typography>
  </BreadcrumbItem>
)

const BreadcrumbSeparator = () => (
  <li
    role='presentation'
    aria-hidden='true'
  >
    <ChevronRight className='size-3.5' strokeWidth={3.5} />
  </li>
)

export {
  Breadcrumb,

  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
}
