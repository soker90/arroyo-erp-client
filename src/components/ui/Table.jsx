import { cn } from 'utils'

const Table = (
  {
    ref,
    className,
    ...props
  }
) => (<div className='relative w-full overflow-y-hidden overflow-x-auto'>
  <table
    ref={ref}
    className={cn('w-full caption-bottom text-sm', className)}
    {...props}
  />
</div>)
Table.displayName = 'Table'

const TableHeader = (
  {
    ref,
    className,
    ...props
  }
) => (<thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />)
TableHeader.displayName = 'TableHeader'

const TableBody = (
  {
    ref,
    className,
    ...props
  }
) => (<tbody
  ref={ref}
  className={className}
  {...props}
/>)
TableBody.displayName = 'TableBody'

const TableFooter = (
  {
    ref,
    className,
    ...props
  }
) => (<tfoot
  ref={ref}
  className={cn('border-t bg-muted/50 font-medium last:[&>tr]:border-b-0', className)}
  {...props}
/>)
TableFooter.displayName = 'TableFooter'

const TableRow = (
  {
    ref,
    className,
    selected,
    focusable = true,
    ...props
  }
) => (<tr
  ref={ref}
  className={cn(
    'border-b border-border transition-colors data-[state=selected]:bg-muted h-10 [&>tr:has([role=checkbox])]:h-auto [&>tr>button]:h-auto', selected && 'bg-primary/20', focusable && 'hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[rgba(255,255,255,0.04)]',
    className
  )}
  {...props}
/>)
TableRow.displayName = 'TableRow'

const TableHead = (
  {
    ref,
    className,
    ...props
  }
) => (<th
  ref={ref}
  className={cn(
    'h-12 px-4 text-left align-middle font-medium text-foreground font-bold [&:has([role=checkbox])]:pr-0',
    className
  )}
  {...props}
/>)
TableHead.displayName = 'TableHead'

const TableCell = (
  {
    ref,
    className,
    ...props
  }
) => (<td
  ref={ref}
  className={cn('px-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
  {...props}
/>)
TableCell.displayName = 'TableCell'

const TableCaption = (
  {
    ref,
    className,
    ...props
  }
) => (<caption
  ref={ref}
  className={cn('mt-4 text-sm text-muted-foreground', className)}
  {...props}
/>)
TableCaption.displayName = 'TableCaption'

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption
}
