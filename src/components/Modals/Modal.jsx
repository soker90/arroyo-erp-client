import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

const Modal = ({ open, onClose, children, className }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (open) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [open, onClose])

  if (!open) return null

  /* TODO Change z-index */
  return createPortal(
    <div
      className={`fixed inset-0 z-1301 flex items-center justify-center bg-black/50 ${className}`}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className='outline-hidden'
        onClick={(e) => e.stopPropagation()}
        role='dialog'
        aria-modal='true'
      >
        {children}
      </div>
    </div>,
    document.body
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string
}

export default Modal
