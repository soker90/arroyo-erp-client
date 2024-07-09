import { Plus, ArrowDownToLine, ListPlus } from 'lucide-react'

import { downloadFile } from 'utils'
import { TABS } from '../../constants'

const _handleClickDownloadProducts = (idProvider, nameProvider) => () => {
  downloadFile(`products/export-provider/${idProvider}`, `Productos de ${nameProvider}.ods`)
}

/**
 * Buttons for header
 * @private
 */
export const getButtons = ({
  showEditProductModal, _handleClickNewInvoice, deliveryOrdersSelected,
  _handleClickNewDeliveryOrder, currentTab, idProvider, nameProvider
}) => ({
  [TABS.PRODUCTS]: [{
    onClick: _handleClickDownloadProducts(idProvider, nameProvider),
    Icon: ArrowDownToLine,
    label: 'Descargar',
    variant: 'contained'
  }, {
    variant: 'contained',
    onClick: showEditProductModal,
    Icon: Plus,
    label: 'Nuevo producto'
  }],
  [TABS.DELIVERY_ORDERS]: [{
    variant: 'contained',
    onClick: _handleClickNewInvoice,
    Icon: ListPlus,
    label: 'Crear factura',
    disabled: deliveryOrdersSelected.length === 0
  },
  {
    variant: 'contained',
    onClick: _handleClickNewDeliveryOrder,
    Icon: Plus,
    label: 'Nuevo albarán'
  }],
  [TABS.INVOICES]: []
}[currentTab])
