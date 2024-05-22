import * as React from 'react'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'

import { cn } from 'utils'
import { buttonVariants } from './Button'

/**
 * Devuelve el literal indicador de página
 * @param {number} from
 * @param {number} to
 * @param {number} count
 * @returns {string}
 */
export const labelOfRows = ({ from, to, count }) => `${from}-${
  to === -1 ? count : to
} de ${
  count !== -1
    ? count
    : `más de ${to}`
}`

const Pagination = ({
  className,
  count,
  page,
  rowsPerPage,
  onPageChange,
  ...props
}) => {
  const offset = page * rowsPerPage
  const firstItem = offset + 1
  const lastItem = Math.min(offset + rowsPerPage, count)

  return (
    <nav
      role='navigation'
      aria-label='pagination'
      className={cn('mx-auto flex w-full justify-center items-center', className)}
      {...props}
    >
      <p className='text-sm'>{labelOfRows({ from: firstItem, to: lastItem, count })}</p>
      <PaginationContent>
        <PaginationPrevious onClick={onPageChange} page={page} disabled={firstItem === 1} />

        <PaginationNext onClick={onPageChange} page={page} disabled={lastItem === count} />

      </PaginationContent>
    </nav>
  )
}
Pagination.displayName = 'Pagination'

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex items-center gap-1', className)}
    {...props}
  />
))
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
))
PaginationItem.displayName = 'PaginationItem'

const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  ...props
}) => (
  <button
    aria-current={isActive ? 'page' : undefined}
    className={cn(buttonVariants({
      variant: isActive ? 'outline' : 'ghost',
      size
    }), 'rounded-full', className)}
    {...props}
  />
)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({
  className,
  onClick,
  page,
  ...props
}) => (
  <PaginationLink
    aria-label='Ir a la página anterior'
    size='default'
    className={cn('gap-1 pl-2.5', className)}
    onClick={() => onClick(page - 1)}
    {...props}
  >
    <ChevronLeft className='h-4 w-4' />
  </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({
  className,
  onClick,
  page,
  ...props
}) => (
  <PaginationLink
    aria-label='Go to next page'
    size='default'
    className={cn('gap-1 pr-2.5', className)}
    onClick={() => onClick(page + 1)}
    {...props}
  >
    <ChevronRight className='h-4 w-4' />
  </PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'

const PaginationEllipsis = ({
  className,
  ...props
}) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className='h-4 w-4' />
    <span className='sr-only'>More pages</span>
  </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
}
