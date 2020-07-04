import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import ProviderInfo from '../ProviderInfo/ProviderInfo';
import ProviderBilling from '../ProviderBilling/ProviderBilling';
import { useStyles } from './ProviderExpandedInfo.styles';

const ProviderExpandedInfo = ({
  expanded, provider, showEditModal, billing,
}) => {
  const classes = useStyles();

  if (!expanded) return null;

  return (
    <Box mt={3} className={classes.cards}>
      <Grid container spacing={3}>
        <ProviderInfo {...provider} showEditModal={showEditModal} />
        <ProviderBilling {...billing} />
      </Grid>
    </Box>
  );
};

ProviderExpandedInfo.propTypes = {
  expanded: PropTypes.bool.isRequired,
  provider: PropTypes.object,
  showEditModal: PropTypes.func.isRequired,
  billing: PropTypes.object,
};

ProviderExpandedInfo.displayName = 'ProviderExpandedInfo';
export const story = ProviderExpandedInfo;
export default memo(ProviderExpandedInfo);
