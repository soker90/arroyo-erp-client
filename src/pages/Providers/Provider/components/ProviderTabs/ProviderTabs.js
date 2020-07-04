import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Card, Tab, Tabs } from '@material-ui/core';
import { useHistory } from 'react-router';

import { TABS } from '../../constants';
import { useStyles } from './ProviderTabs.styles';

const ProviderTabs = ({ currentTab }) => {
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
        scrollButtons="auto"
        textColor="secondary"
        value={currentTab}
        variant="scrollable"
      >
        {Object.values(TABS)
          .map(tab => (
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

ProviderTabs.propTypes = {
  currentTab: PropTypes.string.isRequired,
};

ProviderTabs.displayName = 'ProviderTabs';
export const story = ProviderTabs;
export default memo(ProviderTabs);
