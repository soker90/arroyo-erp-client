import PropTypes from 'prop-types';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

import { Header } from 'components';
import { NavLink } from 'react-router-dom';
import GetAppIcon from '@material-ui/icons/GetApp';
import { downloadFile } from '../../../../utils';

const HeaderBook = ({ year }) => {
  const _handleClickDownload = () => {
    downloadFile(`client/invoices/export?year=${year}`, `Libro ${year}.ods`);
  };

  return (
    <Header
      title='Libro'
      description={`Libro clientes ${year}`}
      routes={[{
        link: '/app/clientes/listado',
        title: 'Clientes',
      }]}
      buttons={[
        {
          onClick: _handleClickDownload,
          Icon: GetAppIcon,
          label: 'Descargar',
          variant: 'contained',
        },
        {
          component: NavLink,
          to: `/app/clientes/libro/${year - 1}`,
          Icon: SkipPreviousIcon,
          label: `${year - 1}`,
          variant: 'outlined',
        },
        {
          component: NavLink,
          to: `/app/clientes/libro/${year + 1}`,
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
export default HeaderBook;
