import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Header from 'components/Header';

const HeaderProvider = ({
  buttons, title, onExpand, expanded,
}) => (
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
    buttons={buttons}
  />
);

HeaderProvider.propTypes = {
  buttons: PropTypes.array.isRequired,
  title: PropTypes.string,
  onExpand: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
};

HeaderProvider.displayName = 'Provider-Header';

export const story = HeaderProvider;
export default memo(HeaderProvider);
