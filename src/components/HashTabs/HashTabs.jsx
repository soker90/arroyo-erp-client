import PropTypes from 'prop-types'
import { useNavigate } from 'react-router'

import { Card, Tabs } from 'components'

const HashTabs = ({
  currentTab,
  tabs
}) => {
  const navigate = useNavigate()

  /**
   * Event onChange tabs
   * @param {Object} event
   * @param {String} value
   * @private
   */
  const _handleTabsChange = (event, value) => {
    navigate(`#${value}`)
  }

  return (
    <Card>
      <Tabs
        currentTab={currentTab}
        tabs={tabs}
        onChange={_handleTabsChange}
      />
    </Card>
  )
}

HashTabs.propTypes = {
  currentTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired
}

HashTabs.displayName = 'HashTabs'
export const story = HashTabs
export default HashTabs
