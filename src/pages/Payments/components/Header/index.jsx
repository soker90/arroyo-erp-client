import { useState } from 'react'
import PropTypes from 'prop-types'
import VerticalAlignCenterIcon from '@mui/icons-material/VerticalAlignCenter'
import { ArrowDownToLine } from 'lucide-react'

import { Header } from 'components'
import { downloadFile, format } from 'utils'
import MergePaymentModal from '../../modals/MergePaymentModal'

const HeaderPayments = ({
  selected,
  mergePayments
}) => {
  const [showModal, setShowModal] = useState(false)

  /**
   * Cierra el modal
   * @private
   */
  const _closeModal = () => setShowModal(false)

  return (
    <>
      <Header
        title='Pagos'
        buttons={[
          {
            Icon: ArrowDownToLine,
            label: 'Descargar',
            onClick: () => {
              downloadFile('payments/export', `Pagos pendientes ${format.date(Date.now())}.ods`)
            }
          },
          {
            Icon: VerticalAlignCenterIcon,
            label: 'Fusionar',
            onClick: () => {
              setShowModal(true)
            },
            disabled: selected.length === 0
          }
        ]}
      />
      <MergePaymentModal
        selected={selected} close={_closeModal} show={showModal}
        mergePayments={mergePayments}
      />
    </>
  )
}

HeaderPayments.propTypes = {
  selected: PropTypes.array.isRequired
}

export default HeaderPayments
