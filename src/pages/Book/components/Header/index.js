import PropTypes from 'prop-types';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import GetAppIcon from '@mui/icons-material/GetApp';
import { NavLink } from 'react-router-dom';

import { Header } from 'components';
import { downloadFile, format, objectToParams } from 'utils';

const HeaderBook = ({ year, filter }) => {
  const _getFilter = month => {
    const {
      dateInvoice, total, numCheque, nInvoice, nameProvider, expenses,
    } = filter;

    const filterParams = {
      ...(dateInvoice && { dateInvoice: format.dateToSend(dateInvoice) }),
      ...(total && { total }),
      ...(numCheque && { numCheque }),
      ...(nInvoice && { nInvoice }),
      ...(nameProvider && { nameProvider }),
      ...(expenses && { expenses }),
      year,
      ...(month && { month }),
    };

    return objectToParams(filterParams);
  };

  const _handleClickDownload = () => {
    downloadFile(`invoices/export${_getFilter()}`, `Libro ${year}.ods`);
  };

  const _handleClickDownloadTrimester = month => () => {
    const nTrimester = (month + 2) / 3;
    downloadFile(`invoices/export${_getFilter(month)}`, `Libro ${year} Trimestre ${nTrimester}.ods`);
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
        },
        {
          onClick: _handleClickDownloadTrimester(4),
          Icon: GetAppIcon,
          label: 'T2',
          variant: 'contained',
        },
        {
          onClick: _handleClickDownloadTrimester(7),
          Icon: GetAppIcon,
          label: 'T3',
          variant: 'contained',
        },
        {
          onClick: _handleClickDownloadTrimester(10),
          Icon: GetAppIcon,
          label: 'T4',
          variant: 'contained',
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
  filter: PropTypes.object.isRequired,
};

HeaderBook.displayName = 'HeaderBook';
export const story = HeaderBook;
export default HeaderBook;
