import PropTypes from 'prop-types'
import { SkipForward, SkipBack } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { Header } from 'components'

const HeaderDO = ({ year }) => (
  <Header
    title='Albaranes'
    description={`Albaranes ${year}`}
    buttons={[
      {
        component: NavLink,
        to: `/app/informes/albaranes/${year - 1}`,
        Icon: SkipBack,
        label: `${year - 1}`,
        variant: 'outlined'
      },
      {
        component: NavLink,
        to: `/app/informes/albaranes/${year + 1}`,
        Icon: SkipForward,
        label: `${year + 1}`,
        variant: 'outlined'
      }
    ]}
  />
)

HeaderDO.propTypes = {
  year: PropTypes.number.isRequired
}

export default HeaderDO
