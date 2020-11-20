import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PostAddIcon from '@material-ui/icons/PostAdd';

import { Header } from 'components';
import NewInvoiceModal from '../../modals/NewInvoiceModal';
import { useStyles } from './styles';

const HeaderProvider = ({
  title, onExpand, expanded,
}) => {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  const _handleClickNewInvoice = () => {
    setShowModal(true);
  };

  return (
    <>
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
      <NewInvoiceModal show={showModal} close={() => setShowModal(false)} />
    </>
  );
};

HeaderProvider.propTypes = {
  title: PropTypes.string,
  onExpand: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
};

HeaderProvider.displayName = 'Client-Header';

export const story = HeaderProvider;
export default memo(HeaderProvider);
