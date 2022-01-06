import PropTypes from 'prop-types';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import GetAppIcon from '@material-ui/icons/GetApp';

import { Header } from 'components';
import { NavLink } from 'react-router-dom';
import { downloadFile } from 'utils';
import { PATH_CLIENT_BILLING, PATH_PROVIDER_BILLING } from 'constants/paths';

const getRoute = type => (type === 'clientes' ? PATH_CLIENT_BILLING : PATH_PROVIDER_BILLING);

const HeaderBook = ({
  year,
  type,
}) => {
  const _handleClickDownload = short => () => downloadFile(
    `billings/export?year=${year}${short ? '&short=true' : ''}`,
    `Facturación ${year}.ods`,
  );

  return (
    <Header
      title='Facturación'
      description={`Facturación ${type || ''} ${year}`}
      buttons={[
        {
          onClick: _handleClickDownload(true),
          Icon: GetAppIcon,
          label: '347',
          variant: 'contained',
          color: 'default',
        },
        {
          onClick: _handleClickDownload(),
          Icon: GetAppIcon,
          label: 'Descargar',
          variant: 'contained',
        },
        {
          component: NavLink,
          to: `${getRoute(type)}/${year - 1}`,
          Icon: SkipPreviousIcon,
          label: `${year - 1}`,
          variant: 'outlined',
        },
        {
          component: NavLink,
          to: `${getRoute(type)}/${year + 1}`,
          Icon: SkipNextIcon,
          label: `${year + 1}`,
          variant: 'outlined',
        },
      ]}
    />
  );
};

HeaderBook.propTypes = {
  year: PropTypes.number.isRequired,
  type: PropTypes.string,
};

HeaderBook.displayName = 'HeaderBilling';
export const story = HeaderBook;
export default HeaderBook;
