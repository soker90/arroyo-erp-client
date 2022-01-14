import { Suspense } from 'react';
import PropTypes from 'prop-types';
import { LinearProgress } from '@mui/material';
import { connect } from 'react-redux';

import { actions } from 'reducers/modal';
import MODAL_COMPONENTS from '../modal-components';

const ModalRoot = ({
  modalType, modalProps, show, close, showModal,
}) => {
  const SpecificModal = MODAL_COMPONENTS[modalType];

  if (!modalType || !SpecificModal) return null;

  return (
    <Suspense fallback={<LinearProgress />}>
      <SpecificModal
        show={show}
        close={close}
        showModal={showModal}
        {...modalProps}
      />
    </Suspense>
  );
};

ModalRoot.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.object,
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

const mapStateToProps = ({ modal }) => ({
  modalType: modal.modalType,
  modalProps: modal.modalProps,
  show: modal.show,
  close: modal.close,
  showModal: modal.showModal,
});

const mapDispatchToProps = { ...actions };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalRoot);
