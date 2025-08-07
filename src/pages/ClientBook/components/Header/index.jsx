import PropTypes from 'prop-types'
import { SkipForward, SkipBack, ArrowDownToLine } from 'lucide-react'
import { NavLink } from 'react-router'

import { Header } from 'components'
import { downloadFile } from 'utils'

const HeaderBook = ({ year }) => {
  const _handleClickDownload = () => {
    downloadFile(`client/invoices/export?year=${year}`, `Libro ${year}.ods`)
  }

  return (
    <Header
      title='Libro'
      description={`Libro clientes ${year}`}
      routes={[{
        link: '/app/clientes/listado',
        title: 'Clientes'
      }]}
      buttons={[
        {
          onClick: _handleClickDownload,
          Icon: ArrowDownToLine,
          label: 'Descargar',
          variant: 'contained'
        },
        {
          component: NavLink,
          to: `/app/clientes/libro/${year - 1}`,
          Icon: SkipBack,
          label: `${year - 1}`,
          variant: 'outlined'
        },
        {
          component: NavLink,
          to: `/app/clientes/libro/${year + 1}`,
          Icon: SkipForward,
          label: `${year + 1}`,
          variant: 'outlined'
        }
      ]}
    />
  )
}

HeaderBook.propTypes = {
  year: PropTypes.number.isRequired
}

export default HeaderBook
