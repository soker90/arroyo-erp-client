import { SkipForward, SkipBack } from 'lucide-react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { Header } from 'components'

const HeaderPaymentsReport = ({ year }) => (
  <Header
    title='Informes'
    description={`Informe de pagarés ${year}`}
    buttons={[{
      component: NavLink,
      to: `/app/informes/pagares/${year - 1}`,
      Icon: SkipBack,
      label: `${year - 1}`,
      variant: 'outlined'
    },
    {
      component: NavLink,
      to: `/app/informes/pagares/${+year + 1}`,
      Icon: SkipForward,
      label: `${+year + 1}`,
      variant: 'outlined'
    }]}
  />
)

HeaderPaymentsReport.propTypes = {
  year: PropTypes.string.isRequired
}

export default HeaderPaymentsReport
