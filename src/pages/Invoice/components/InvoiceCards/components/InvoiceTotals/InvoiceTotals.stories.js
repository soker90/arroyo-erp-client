import { story as InvoiceTotals } from './InvoiceTotals';

export default {
  title: 'Rutas/Factura/Totales',
  parameters: {
    component: InvoiceTotals,
    componentSubtitle: 'Totales',
  },
};

const InvoiceTotalsStory = () => (
  <InvoiceTotals
    iva={19.3}
    re={2.6}
    total={63.25}
    taxBase={33.2}
  />
);

InvoiceTotalsStory.storyName = 'Totales';

export { InvoiceTotalsStory };
