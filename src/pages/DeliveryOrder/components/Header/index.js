import { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';

import { Header } from 'components';
import AddProductModal from '../../modals/AddProduct';

const HeaderDeliveryOrder = ({ provider, nameProvider, readOnly }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const _closeAddModal = useCallback(() => setShowAddModal(false), [setShowAddModal]);
  const _openAddModal = useCallback(() => setShowAddModal(true), [setShowAddModal]);

  return (
    <>
      <Header
        routes={[{
          link: `/app/proveedores/${provider}`,
          title: `${nameProvider}`,
        },
        {
          link: `/app/proveedores/${provider}#Albaranes`,
          title: 'Albaranes',
        }]}
        title='Albarán'
        description=''
        buttons={[{
          variant: 'contained',
          onClick: _openAddModal,
          Icon: AddIcon,
          disableSvg: true,
          label: 'Producto',
          disabled: readOnly,
        }]}
      />
      <AddProductModal idProvider={provider} show={showAddModal} close={_closeAddModal} />
    </>
  );
};

HeaderDeliveryOrder.propTypes = {
  provider: PropTypes.string,
  nameProvider: PropTypes.string,
  readOnly: PropTypes.bool.isRequired,
};

HeaderDeliveryOrder.displayName = 'Header-DeliveryOrder';
export const story = HeaderDeliveryOrder;
export default memo(HeaderDeliveryOrder);
