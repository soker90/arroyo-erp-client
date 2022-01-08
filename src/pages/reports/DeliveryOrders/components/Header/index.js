import PropTypes from 'prop-types';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { NavLink } from 'react-router-dom';

import { Header } from 'components';

const HeaderDO = ({ year }) => (
  <Header
    title='Albaranes'
    description={`Albaranes ${year}`}
    buttons={[
      {
        component: NavLink,
        to: `/app/informes/albaranes/${year - 1}`,
        Icon: SkipPreviousIcon,
        label: `${year - 1}`,
        variant: 'outlined',
      },
      {
        component: NavLink,
        to: `/app/informes/albaranes/${year + 1}`,
        Icon: SkipNextIcon,
        label: `${year + 1}`,
        variant: 'outlined',
      },
    ]}
  />
);

HeaderDO.propTypes = {
  year: PropTypes.number.isRequired,
};

HeaderDO.displayName = 'HeaderDeliveryOrders';
export const story = HeaderDO;
export default HeaderDO;
