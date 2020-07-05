import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Header from 'components/Header';
import { getButtons } from './utils';

const HeaderProvider = ({
  title, onExpand, expanded, createDeliveryOrder, idProvider, deliveryOrdersSelected,
  createInvoice, showEditProductModal, currentTab,
}) => {
  /**
   * Navega a la página de nuevo albarán
   * @private
   */
  const _handleClickNewDeliveryOrder = () => {
    createDeliveryOrder(idProvider);
  };

  const _handleClickNewInvoice = () => {
    createInvoice(deliveryOrdersSelected);
  };

  const _buttons = useMemo(() => (
    getButtons({
      currentTab,
      deliveryOrdersSelected,
      _handleClickNewDeliveryOrder,
      _handleClickNewInvoice,
      showEditProductModal,
    })), [currentTab]);

  return (
    <Header
      routes={[{
        link: '/app/proveedores',
        title: 'Proveedores',
      }]}
      title={title}
      buttonsSecondary={[{
        variant: 'text',
        onClick: onExpand,
        Icon: expanded ? ExpandLessIcon : ExpandMoreIcon,
        disableSvg: true,
        label: expanded ? 'Ocultar información' : 'Mostrar información',
      }]}
      buttons={_buttons}
    />
  );
};

HeaderProvider.propTypes = {
  title: PropTypes.string,
  onExpand: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  createDeliveryOrder: PropTypes.func.isRequired,
  idProvider: PropTypes.string.isRequired,
  deliveryOrdersSelected: PropTypes.array.isRequired,
  createInvoice: PropTypes.func.isRequired,
  showEditProductModal: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
};

HeaderProvider.displayName = 'Provider-Header';

export const story = HeaderProvider;
export default memo(HeaderProvider);
