import PropTypes from 'prop-types'
import { Card, Tab, Tabs } from '@mui/material'
import { useNavigate } from 'react-router'

import { useStyles } from './HashTabs.styles'

const HashTabs = ({
  currentTab,
  tabs
}) => {
  const classes = useStyles()
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
    <Card className={classes.tabs}>
      <Tabs
        onChange={_handleTabsChange}
        scrollButtons='auto'
        textColor='secondary'
        value={currentTab}
        variant='scrollable'
        indicatorColor='primary'
      >
        {tabs.map(tab => (
          <Tab
            key={tab}
            value={tab}
            label={tab}
          />
        ))}
      </Tabs>
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
