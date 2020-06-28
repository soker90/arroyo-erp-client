import React from 'react';
import PropTypes from 'prop-types';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from '@material-ui/core';
import uniqueId from 'uniqid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ProductsOrderTable from './ProductsOrderTable';
import DeliveryOrderExpandHeader from './DeliveryOrderExpandHeader';

const DeliveryOrderExpand = ({ products, ...props }) => (
  <ExpansionPanel TransitionProps={{ unmountOnExit: true }} key={uniqueId()}>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-label="Expand"
    >
      <DeliveryOrderExpandHeader {...props} />
    </ExpansionPanelSummary>

    <ExpansionPanelDetails>
      <ProductsOrderTable products={products} />
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

DeliveryOrderExpand.propTypes = {
  _id: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  products: PropTypes.array.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

DeliveryOrderExpand.displayName = 'DeliveryOrderExpand';
export const story = DeliveryOrderExpand;
export default DeliveryOrderExpand;
