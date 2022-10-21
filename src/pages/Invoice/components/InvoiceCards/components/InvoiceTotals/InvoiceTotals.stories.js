import { ReduxProvider } from 'story'
import { story as InvoiceTotals } from './InvoiceTotals'

export default {
  title: 'Rutas/Factura/Totales',
  parameters: {
    component: InvoiceTotals,
    componentSubtitle: 'Totales'
  },
  decorators: [storyFn => (
    <ReduxProvider>
      {storyFn()}
    </ReduxProvider>
  )]
}

const InvoiceTotalsStory = () => (
  <InvoiceTotals
    iva={19.3}
    re={2.6}
    total={63.25}
    taxBase={33.2}
    isEditable
    className='clase'
  />
)

InvoiceTotalsStory.storyName = 'Totales'

export { InvoiceTotalsStory }
