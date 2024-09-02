import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

const Collapse = ({ in: open = false, children }) => {
  return (
    <CollapsiblePrimitive.Root open={open}>
      <CollapsiblePrimitive.CollapsibleContent>{children}</CollapsiblePrimitive.CollapsibleContent>
    </CollapsiblePrimitive.Root>
  )
}

export { Collapse }
