import { forwardRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from 'utils'
import { SelectForm } from '../Forms'

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

const Pagination = (
  {
    className,
    count,
    page,
    rowsPerPage,
    rowsPerPageOptions,
    onPageChange,
    onRowsPerPageChange,
    ...props
  }) => {
  const numRows = +rowsPerPage
  const offset = page * numRows
  const firstItem = offset + 1
  const lastItem = Math.min(offset + numRows, count)

  return (
    <nav
      role='navigation'
      aria-label='pagination'
      className={cn('mx-auto flex w-full items-center justify-end', className)}
      {...props}
    >
      <span className='text-sm'> filas</span>
      <SelectForm
        className='flex !w-16 ml-2 mr-9 items-center !p-0 !-mt-4 !text-sm' value={numRows}
        onChange={onRowsPerPageChange}
      >
        {rowsPerPageOptions.map((option) => (
          <option className='text-sm' key={option} value={option}>{option}</option>
        ))}
      </SelectForm>

      <p className='text-sm'>{labelOfRows({ from: firstItem, to: lastItem, count })}</p>
      <PaginationContent className='ml-5'>
        <PaginationPrevious onClick={onPageChange} page={page} disabled={firstItem === 1} className='mr-2' />

        <PaginationNext onClick={onPageChange} page={page} disabled={lastItem === count} />

      </PaginationContent>
    </nav>
  )
}
Pagination.displayName = 'Pagination'

const PaginationContent = forwardRef(({ className, ...props }, ref) => (<ul
  ref={ref}
  className={cn('flex items-center', className)}
  {...props}
                                                                        />))
PaginationContent.displayName = 'PaginationContent'

const PaginationLink = ({
  className, isActive, size = 'icon', ...props
}) => (<button
  aria-current={isActive ? 'page' : undefined}
  className={cn('hover:bg-accent hover:text-accent-foreground text-default rounded-full p-2', className)}
  {...props}
       />)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = (
  {
    className, onClick, page, ...props
  }) => (
    <PaginationLink
      aria-label='Ir a la página anterior'
      size='default'
      className={cn('gap-1 pl-2.5', props?.disabled && 'opacity-25', className)}
      onClick={() => onClick(page - 1)}
      {...props}
    >
      <ChevronLeft className='h-5 w-5' />
    </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({
  className, onClick, page, ...props
}) => (
  <PaginationLink
    aria-label='Go to next page'
    size='default'
    className={cn('gap-1 pr-2.5', props?.disabled && 'opacity-25', className)}
    onClick={() => onClick(page + 1)}
    {...props}
  >
    <ChevronRight className='h-5 w-5 ' />
  </PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
}
