import { memo } from 'react';
import PropTypes from 'prop-types';
import { Card, Tab, Tabs } from '@material-ui/core';
import { useHistory } from 'react-router';

import { useStyles } from './HashTabs.styles';

const HashTabs = ({ currentTab, tabs }) => {
  const classes = useStyles();
  const history = useHistory();

  /**
   * Event onChange tabs
   * @param {Object} event
   * @param {String} value
   * @private
   */
  const _handleTabsChange = (event, value) => {
    history.push(`#${value}`);
  };

  return (
    <Card className={classes.tabs}>
      <Tabs
        onChange={_handleTabsChange}
        scrollButtons='auto'
        textColor='secondary'
        value={currentTab}
        variant='scrollable'
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
  );
};

HashTabs.propTypes = {
  currentTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

HashTabs.displayName = 'HashTabs';
export const story = HashTabs;
export default memo(HashTabs);
