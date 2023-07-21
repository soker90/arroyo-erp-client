import { useState } from 'react'
import PropTypes from 'prop-types'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { Label, Header } from 'components'
import PostAddIcon from '@mui/icons-material/PostAdd'
import { useStyles } from './styles'
import NewInvoiceModal from '../../modals/NewInvoiceModal'

const HeaderProvider = ({
  title, onExpand, expanded,
  note, idProvider
}) => {
  const classes = useStyles()
  const [showModal, setShowModal] = useState(false)

  const _handleClickNewInvoice = () => {
    setShowModal(true)
  }

  /**
   * Render note
   * @returns {JSX.Element}
   * @private
   */
  const _renderNote = () => (
    <Label
      className={classes.label}
      color='warning'
    >
      {note}
    </Label>
  )

  return (
    <>
      <Header
        routes={[{
          link: '/app/gastos',
          title: 'Gastos'
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
        buttons={[{
          variant: 'contained',
          onClick: _handleClickNewInvoice,
          Icon: PostAddIcon,
          disableSvg: true,
          label: 'Crear factura'
        }]}
      />
      <NewInvoiceModal show={showModal} close={() => setShowModal(false)} idProvider={idProvider} />
    </>
  )
}

HeaderProvider.propTypes = {
  title: PropTypes.string,
  onExpand: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  note: PropTypes.string
}

HeaderProvider.displayName = 'Provider-Header'

export const story = HeaderProvider
export default HeaderProvider
