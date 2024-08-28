import { cn } from 'utils'
import { cva } from 'class-variance-authority'

export const gridVariants = cva(
  '',
  {
    variants: {
      type: {
        container: 'flex flex-wrap -mt-6 -ml-6',
        item: 'pl-6 pt-6'
      },
      lg: {
        1: 'lg:w-1/12',
        2: 'lg:w-2/12',
        3: 'lg:w-3/12',
        4: 'lg:w-4/12',
        5: 'lg:w-5/12',
        6: 'lg:w-6/12',
        7: 'lg:w-7/12',
        8: 'lg:w-8/12',
        9: 'lg:w-9/12',
        10: 'lg:w-10/12',
        11: 'lg:w-11/12',
        12: 'lg:w-full'
      },
      md: {
        1: 'md:w-1/12',
        2: 'md:w-2/12',
        3: 'md:w-3/12',
        4: 'md:w-4/12',
        5: 'md:w-5/12',
        6: 'md:w-6/12',
        7: 'md:w-7/12',
        8: 'md:w-8/12',
        9: 'md:w-9/12',
        10: 'md:w-10/12',
        11: 'md:w-11/12',
        12: 'md:w-full'
      },
      xs: {
        1: 'w-1/12',
        2: 'w-2/12',
        3: 'w-3/12',
        4: 'w-4/12',
        5: 'w-5/12',
        6: 'w-6/12',
        7: 'w-7/12',
        8: 'w-8/12',
        9: 'w-9/12',
        10: 'w-10/12',
        11: 'w-11/12',
        12: 'w-full'
      }
    },
    defaultVariants: {
      type: 'container'
    }
  }
)

const Grid = ({ children, className, item, md, xs, lg }) => {
  const type = item ? 'item' : 'container'

  return (
    <div className={cn(gridVariants({ type, xs, md, lg }), className)}>
      {children}
    </div>
  )
}

export default Grid
