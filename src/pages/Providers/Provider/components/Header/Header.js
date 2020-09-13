import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Label, Header } from 'components';
import { getButtons } from './utils';

const HeaderProvider = ({
  title, onExpand, expanded, createDeliveryOrder, idProvider, deliveryOrdersSelected,
  createInvoice, showEditProductModal, currentTab, resetSelected, note,
}) => {
  /**
   * Navega a la página de nuevo albarán
   * @private
   */
  const _handleClickNewDeliveryOrder = () => {
    createDeliveryOrder(idProvider);
    resetSelected();
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
      // eslint-disable-next-line
    })), [currentTab, deliveryOrdersSelected.length]);

  /**
   * Render note
   * @returns {JSX.Element}
   * @private
   */
  const _renderNote = () => (
    <Label
      // className={classes.label}
      color='primary'
    >
      {note}
    </Label>
  );

  return (
    <Header
      routes={[{
        link: '/app/proveedores',
        title: 'Proveedores',
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
  resetSelected: PropTypes.func.isRequired,
  note: PropTypes.string,
};

HeaderProvider.displayName = 'Provider-Header';

export const story = HeaderProvider;
export default memo(HeaderProvider);
