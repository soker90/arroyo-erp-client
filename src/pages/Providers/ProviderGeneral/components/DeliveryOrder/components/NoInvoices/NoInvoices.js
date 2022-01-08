import PropTypes from 'prop-types';
import {
  Checkbox,
} from '@material-ui/core';

import DeliveryOrderExpand from 'components/DeliveryOrderExpand';

const NoInvoices = ({
  deliveryOrders, selected, setSelected,
}) => {
  /**
   * Add elemento to selected array
   * @param {String} element
   * @private
   */
  const _addSelected = element => {
    const newSelected = selected.slice();
    newSelected.push(element);
    setSelected(newSelected);
  };

  /**
   * Remove element from selected array
   * @param {string} element
   * @private
   */
  const _removeSelected = element => {
    const newSelected = selected.filter(item => item !== element);
    setSelected(newSelected);
  };

  /**
   * Toggle checkbox
   * @param {String} id
   * @param {Boolean} value
   * @private
   */
  const _handleChangeCheckbox = (id, value) => {
    // eslint-disable-next-line
    value ? _addSelected(id) : _removeSelected(id);
  };

  return deliveryOrders.map(props => (
    <DeliveryOrderExpand {...props} key={props._id}>
      <Checkbox
        onChange={(ev, value) => _handleChangeCheckbox(props._id, value)}
        checked={selected.includes(props._id)}
      />
    </DeliveryOrderExpand>
  ));
};

NoInvoices.propTypes = {
  deliveryOrders: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  setSelected: PropTypes.func.isRequired,
};

NoInvoices.displayName = 'NoInvoices';
export const story = NoInvoices;
export default NoInvoices;
