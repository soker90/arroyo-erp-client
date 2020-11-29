import { memo } from 'react';
import PropTypes from 'prop-types';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import GetAppIcon from '@material-ui/icons/GetApp';

import { Header } from 'components';
import { NavLink } from 'react-router-dom';
import { downloadFile } from 'utils';

const HeaderBook = ({ year }) => {
  const _handleClickDownload = () => {
    downloadFile(`invoices/export/${year}`, `Facturación ${year}.ods`);
  };

  return (
    <Header
      title='Facturación'
      description={`Facturación ${year}`}
      buttons={[
        {
          onClick: _handleClickDownload,
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
