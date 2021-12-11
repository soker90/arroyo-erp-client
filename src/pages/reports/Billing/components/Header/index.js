import { memo } from 'react';
import PropTypes from 'prop-types';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import GetAppIcon from '@mui/icons-material/GetApp';

import { Header } from 'components';
import { NavLink } from 'react-router-dom';
import { downloadFile } from 'utils';

const HeaderBook = ({ year }) => {
  const _handleClickDownload = short => () => downloadFile(
    `billings/export?year=${year}${short ? '&short=true' : ''}`,
    `Facturación ${year}.ods`,
  );

  return (
    <Header
      title='Facturación'
      description={`Facturación ${year}`}
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
          to: `/app/informes/facturacion/${year - 1}`,
          Icon: SkipPreviousIcon,
          label: `${year - 1}`,
          variant: 'outlined',
        },
        {
          component: NavLink,
          to: `/app/informes/facturacion/${year + 1}`,
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
};

HeaderBook.displayName = 'HeaderBilling';
export const story = HeaderBook;
export default memo(HeaderBook);
