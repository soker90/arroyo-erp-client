import PropTypes from 'prop-types'
import {
  Accordion,
  AccordionContent, AccordionItem,
  AccordionTrigger
} from 'components'

import ProductsOrderTable from './ProductsOrderTable'
import DeliveryOrderExpandHeader from './DeliveryOrderExpandHeader'

const DeliveryOrderExpand = ({ products, ...props }) => (
  <Accordion type='multiple'>
    <AccordionItem>
      <AccordionTrigger>
        <DeliveryOrderExpandHeader {...props} />
      </AccordionTrigger>

      <AccordionContent>
        <ProductsOrderTable products={products} />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)

DeliveryOrderExpand.propTypes = {
  products: PropTypes.array.isRequired,
  date: PropTypes.number,
  note: PropTypes.string,
  taxBase: PropTypes.number.isRequired,
  iva: PropTypes.number.isRequired,
  re: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired
}

export default DeliveryOrderExpand
