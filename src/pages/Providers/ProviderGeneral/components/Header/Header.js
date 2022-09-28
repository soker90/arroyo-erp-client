import { useMemo } from 'react';
import PropTypes from 'prop-types';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router';

import { Label, Header } from 'components';
import { getButtons } from './utils';
import { useStyles } from './styles';

const HeaderProvider = ({
  title,
  onExpand,
  expanded,
  createDeliveryOrder,
  idProvider,
  deliveryOrdersSelected,
  createInvoice,
  showEditProductModal,
  currentTab,
  resetSelected,
  note,
  nameProvider,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  /**
   * Navega a la página de nuevo albarán
   * @private
   */
  const _handleClickNewDeliveryOrder = () => {
    createDeliveryOrder({
      provider: idProvider,
      navigate,
    });
    resetSelected();
  };

  const _handleClickNewInvoice = () => {
    createInvoice(deliveryOrdersSelected, navigate);
  };

  const _buttons = useMemo(() => (
    getButtons({
      currentTab,
      deliveryOrdersSelected,
      _handleClickNewDeliveryOrder,
      _handleClickNewInvoice,
      showEditProductModal,
      nameProvider,
      idProvider,
      // eslint-disable-next-line
    })), [currentTab, deliveryOrdersSelected.length]);

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
  nameProvider: PropTypes.string,
};

HeaderProvider.displayName = 'Provider-Header';

export const story = HeaderProvider;
export default HeaderProvider;
