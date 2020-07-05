import AddIcon from '@material-ui/icons/Add';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { TABS } from '../../constants';

/**
 * Buttons for header
 * @private
 */
export const getButtons = ({
  showEditProductModal, _handleClickNewInvoice, deliveryOrdersSelected,
  _handleClickNewDeliveryOrder, currentTab,
}) => ({
  [TABS.PRODUCTS]: [{
    variant: 'contained',
    onClick: showEditProductModal,
    Icon: AddIcon,
    disableSvg: true,
    label: 'Nuevo producto',
  }],
  [TABS.DELIVERY_ORDERS]: [{
    variant: 'contained',
    onClick: _handleClickNewInvoice,
    Icon: PostAddIcon,
    disableSvg: true,
    label: 'Crear factura',
    disabled: deliveryOrdersSelected.length === 0,
  },
  {
    variant: 'contained',
    onClick: _handleClickNewDeliveryOrder,
    Icon: AddIcon,
    disableSvg: true,
    label: 'Nuevo albarán',
  }],
  [TABS.INVOICES]: [],
}[currentTab]);
