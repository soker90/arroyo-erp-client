import { cn } from 'utils'

const Tabs = ({ className, tabs, currentTab, onChange }) => (
  <ul
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md p-1 text-muted-foreground',
      className
    )}
  >
    {
      tabs.map((tab, index) => (
        <li
          key={index}
          className={cn(
            'px-4 pt-3 pb-1.5 text-sm uppercase font-semibold transition-all data-[state=active]:text-secondary border-b-2 cursor-pointer border-transparent data-[state=active]:border-b-secondary',
            className
          )}
          data-state={tab === currentTab ? 'active' : 'inactive'}
          onClick={() => onChange('', tab)}
        >{tab}
        </li>
      ))
    }
  </ul>
)

export { Tabs }
