import { memo } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const ModalPortal = ({ children, show }) => (
  show
    ? createPortal(children, document.getElementById('modal-root'))
    : null
);

ModalPortal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

ModalPortal.displayName = 'ModalPortal';
export const story = ModalPortal;
export default memo(ModalPortal);
