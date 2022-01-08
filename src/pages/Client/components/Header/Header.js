import PropTypes from 'prop-types';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PostAddIcon from '@material-ui/icons/PostAdd';

import { Header } from 'components';

const HeaderProvider = ({
  title,
  onExpand,
  expanded,
  clientId,
  createClientInvoice,
}) => {
  const _handleClickNewInvoice = () => {
    createClientInvoice(clientId);
  };

  return (
    <Header
      routes={[{
        link: '/app/clientes',
        title: 'Clientes',
      }]}
      title={title}
      description={title}
      buttonsSecondary={[{
        variant: 'text',
        onClick: onExpand,
        Icon: expanded ? ExpandLessIcon : ExpandMoreIcon,
        disableSvg: true,
        label: expanded ? 'Ocultar información' : 'Mostrar información',
      }]}
      buttons={[{
        variant: 'contained',
        onClick: _handleClickNewInvoice,
        Icon: PostAddIcon,
        disableSvg: true,
        label: 'Crear factura',
      }]}
    />
  );
};

HeaderProvider.propTypes = {
  title: PropTypes.string,
  onExpand: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  createClientInvoice: PropTypes.func.isRequired,
  clientId: PropTypes.string,
};

HeaderProvider.displayName = 'Client-Header';

export const story = HeaderProvider;
export default HeaderProvider;
