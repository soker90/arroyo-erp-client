import { memo } from 'react';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Header } from 'components';

const HeaderPaymentsReport = ({ year }) => (
  <Header
    title='Informes'
    description={`Informe de pagos ${year}`}
    buttons={[{
      component: NavLink,
      to: `/app/informes/pagares/${year - 1}`,
      Icon: SkipPreviousIcon,
      label: `${year - 1}`,
      variant: 'outlined',
    },
    {
      component: NavLink,
      to: `/app/informes/pagares/${+year + 1}`,
      Icon: SkipNextIcon,
      label: `${+year + 1}`,
      variant: 'outlined',
    }]}
  />
);

HeaderPaymentsReport.displayName = 'HeaderPaymentsReport';

HeaderPaymentsReport.propTypes = {
  year: PropTypes.string.isRequired,
};

export const story = HeaderPaymentsReport;
export default memo(HeaderPaymentsReport);
