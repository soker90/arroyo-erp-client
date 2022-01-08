import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ProductsOrderTable from './ProductsOrderTable';
import DeliveryOrderExpandHeader from './DeliveryOrderExpandHeader';

const DeliveryOrderExpand = ({ products, ...props }) => (
  <Accordion TransitionProps={{ unmountOnExit: true }}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-label='Expand'
    >
      <DeliveryOrderExpandHeader {...props} />
    </AccordionSummary>

    <AccordionDetails>
      <ProductsOrderTable products={products} />
    </AccordionDetails>
  </Accordion>
);

DeliveryOrderExpand.propTypes = {
  products: PropTypes.array.isRequired,
  date: PropTypes.number.isRequired,
  note: PropTypes.string,
  taxBase: PropTypes.number.isRequired,
  iva: PropTypes.number.isRequired,
  re: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
};

DeliveryOrderExpand.displayName = 'DeliveryOrderExpand';
export const story = DeliveryOrderExpand;
export default DeliveryOrderExpand;
