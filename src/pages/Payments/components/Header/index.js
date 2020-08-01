import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import VerticalAlignCenterIcon from '@material-ui/icons/VerticalAlignCenter';

import { Header } from 'components';
import MergePaymentModal from '../../modals/MergePaymentModal';

const HeaderPayments = ({ selected }) => {
  const [showModal, setShowModal] = useState(false);

  /**
   * Cierra el modal
   * @private
   */
  const _closeModal = () => setShowModal(false);

  return (
    <>
      <Header
        title='Pagos'
        buttons={[
          {
            Icon: VerticalAlignCenterIcon,
            label: 'Fusionar',
            onClick: () => {
              setShowModal(true);
            },
            disabled: selected.length === 0,
          },
        ]}
      />
      <MergePaymentModal selected={selected} close={_closeModal} show={showModal} />
    </>
  );
};

HeaderPayments.propTypes = {
  selected: PropTypes.array.isRequired,
};
HeaderPayments.displayName = 'HeaderPayments';
export const story = HeaderPayments;
export default memo(HeaderPayments);
