import AddIcon from '@mui/icons-material/Add';
import PostAddIcon from '@mui/icons-material/PostAdd';
import GetAppIcon from '@mui/icons-material/GetApp';
import { downloadFile } from 'utils';
import { TABS } from '../../constants';

const _handleClickDownloadProducts = (idProvider, nameProvider) => () => {
  downloadFile(`products/export-provider/${idProvider}`, `Productos de ${nameProvider}.ods`);
};

/**
 * Buttons for header
 * @private
 */
export const getButtons = ({
  showEditProductModal, _handleClickNewInvoice, deliveryOrdersSelected,
  _handleClickNewDeliveryOrder, currentTab, idProvider, nameProvider,
}) => ({
  [TABS.PRODUCTS]: [{
    variant: 'contained',
    onClick: showEditProductModal,
    Icon: AddIcon,
    disableSvg: true,
    label: 'Nuevo producto',
  }, {
    onClick: _handleClickDownloadProducts(idProvider, nameProvider),
    Icon: GetAppIcon,
    label: 'Descargar',
    variant: 'contained',
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
