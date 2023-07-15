import { useMemo, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { Label, Header } from 'components'
import { useCreateDeliveryOrder, useCreateInvoice, useProducts } from 'hooks'
import { getButtons } from './utils'
import { useStyles } from './styles'
import NewProductModal from '../../modals/NewProductModal/NewProductModalView'

const HeaderProvider = ({
  title,
  onExpand,
  expanded,
  idProvider,
  deliveryOrdersSelected,
  showEditProductModal,
  currentTab,
  resetSelected,
  note,
  nameProvider
}) => {
  const classes = useStyles()
  const { createDeliveryOrder } = useCreateDeliveryOrder(idProvider)
  const { createInvoice } = useCreateInvoice()
  const { createProduct } = useProducts(idProvider, true)
  const [openModalProduct, setOpenModalProduct] = useState(false)
  /**
   * Navega a la página de nuevo albarán
   * @private
   */
  const _handleClickNewDeliveryOrder = () => {
    createDeliveryOrder()
    resetSelected()
  }

  const _handleClickNewInvoice = () => {
    createInvoice(deliveryOrdersSelected)
  }

  const _closeModalProduct = () => useCallback(
    () => {
      setOpenModalProduct(false)
    },
    [],
  )

  const _buttons = useMemo(() => (
    getButtons({
      currentTab,
      deliveryOrdersSelected,
      _handleClickNewDeliveryOrder,
      _handleClickNewInvoice,
      showEditProductModal: () => setOpenModalProduct(true),
      nameProvider,
      idProvider
      // eslint-disable-next-line
    })), [currentTab, deliveryOrdersSelected.length])

  /**
   * Render note
   * @returns {JSX.Element}
   * @private
   */
  const _renderNote = () => (
    <Label
      className={classes.label}
      color="warning"
    >
      {note}
    </Label>
  )

  return (
    <>
      <Header
        routes={[{
          link: '/app/proveedores',
          title: 'Proveedores'
        }]}
        title={title}
        description={(
          <>
            {title}
            {note && _renderNote()}
          </>
        )}
        buttonsSecondary={[{
          variant: 'text',
          onClick: onExpand,
          Icon: expanded ? ExpandLessIcon : ExpandMoreIcon,
          disableSvg: true,
          label: expanded ? 'Ocultar información' : 'Mostrar información'
        }]}
        buttons={_buttons}
      />
      <NewProductModal
        createProduct={createProduct} show={openModalProduct} close={_closeModalProduct}
        idProvider={idProvider}/>
    </>
  )
}

HeaderProvider.propTypes = {
  title: PropTypes.string,
  onExpand: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  idProvider: PropTypes.string.isRequired,
  deliveryOrdersSelected: PropTypes.array.isRequired,
  showEditProductModal: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
  resetSelected: PropTypes.func.isRequired,
  note: PropTypes.string,
  nameProvider: PropTypes.string
}

export default HeaderProvider
