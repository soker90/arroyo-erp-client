import { useState } from 'react'
import { SkipForward, SkipBack, Plus } from 'lucide-react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { Header } from 'components'
import NewNoteModal from '../../modals/NewNoteModal'

const HeaderNotes = ({ year, createNote }) => {
  const [showModal, setShowModal] = useState(false)

  /**
   * Cierra el modal
   * @private
   */
  const _closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <Header
        title='Notas'
        description={`Notas ${year}`}
        buttons={[
          {
            component: NavLink,
            to: `/app/notas/${year - 1}`,
            Icon: SkipBack,
            label: `${year - 1}`,
            variant: 'outlined'
          },
          {
            component: NavLink,
            to: `/app/notas/${+year + 1}`,
            Icon: SkipForward,
            label: `${+year + 1}`,
            variant: 'outlined'
          },
          {
            Icon: Plus,
            label: 'Nueva',
            onClick: () => {
              setShowModal(true)
            }
          }
        ]}
      />
      <NewNoteModal close={_closeModal} show={showModal} year={year} createNote={createNote} />
    </>
  )
}

HeaderNotes.propTypes = {
  year: PropTypes.string.isRequired,
  createNote: PropTypes.func.isRequired
}

export default HeaderNotes
