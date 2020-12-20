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
    downloadFile(`invoices/export/${year}`, `Libro ${year}.ods`);
  };

  const _handleClickDownloadTrimester = month => () => {
    const nTrimester = (month + 2) / 3;
    downloadFile(`invoices/export/${year}/${month}`, `Libro ${year} Trimestre ${nTrimester}.ods`);
  };

  return (
    <Header
      title='Libro'
      description={`Libro contable ${year}`}
      buttons={[
        {
          onClick: _handleClickDownloadTrimester(1),
          Icon: GetAppIcon,
          label: 'T1',
          variant: 'contained',
          color: 'default',
        },
        {
          onClick: _handleClickDownloadTrimester(4),
          Icon: GetAppIcon,
          label: 'T2',
          variant: 'contained',
          color: 'default',
        },
        {
          onClick: _handleClickDownloadTrimester(7),
          Icon: GetAppIcon,
          label: 'T3',
          variant: 'contained',
          color: 'default',
        },
        {
          onClick: _handleClickDownloadTrimester(10),
          Icon: GetAppIcon,
          label: 'T4',
          variant: 'contained',
          color: 'default',
        },
        {
          onClick: _handleClickDownload,
          Icon: GetAppIcon,
          label: 'Descargar',
          variant: 'contained',
        },
        {
          component: NavLink,
          to: `/app/libro/${year - 1}`,
          Icon: SkipPreviousIcon,
          label: `${year - 1}`,
          variant: 'outlined',
        },
        {
          component: NavLink,
          to: `/app/libro/${year + 1}`,
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

HeaderBook.displayName = 'HeaderBook';
export const story = HeaderBook;
export default memo(HeaderBook);
