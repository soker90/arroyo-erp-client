import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
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
      Icon: SkipPreviousIcon,
      label: `${year - 1}`,
      variant: 'outlined'
    },
    {
      component: NavLink,
      to: `/app/informes/pagares/${+year + 1}`,
      Icon: SkipNextIcon,
      label: `${+year + 1}`,
      variant: 'outlined'
    }]}
  />
)

HeaderPaymentsReport.displayName = 'HeaderPaymentsReport'

HeaderPaymentsReport.propTypes = {
  year: PropTypes.string.isRequired
}

export const story = HeaderPaymentsReport
export default HeaderPaymentsReport
