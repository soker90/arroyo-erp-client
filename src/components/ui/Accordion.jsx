import { Root, Item, Header, Trigger, Content } from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

import { Paper } from 'components'
import { cn } from 'utils'

const Accordion = Root

const AccordionItem = (
  {
    ref,
    className,
    ...props
  }
) => (<Paper className='[&>div[data-state=open]]:my-4'>
  <Item
    ref={ref}
    className={cn('flex flex-col justify-center no-underline text-inherit min-h-[48px] px-4 py-0 transition-all duration-150 ease-in-out', className)}
    value={crypto.randomUUID()} {...props}
  />
</Paper>)
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = (
  {
    ref,
    className,
    children,
    ...props
  }
) => (<Header
  className='flex grow my-3 transition-all duration-150 ease-in-out border-b'
>
  <Trigger
    ref={ref}
    className={cn(
      'flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180',
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className='h-6 w-6 shrink-0 transition-transform duration-200 text-muted-foreground' />
  </Trigger>
</Header>)
AccordionTrigger.displayName = Trigger.displayName

const AccordionContent = (
  {
    ref,
    className,
    children,
    ...props
  }
) => (<Content
  ref={ref}
  className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down min-h-0 h-auto'
  {...props}
>
  <div className={cn('pb-4 pt-0', className)}>{children}</div>
</Content>)

AccordionContent.displayName = Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
