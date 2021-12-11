import { memo } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const NoData = ({ elements }) => (
  (elements === 0)
    ? (
      <Box p={2}>
        <Typography
          variant='body1'
          color='textPrimary'
          align='center'
        >
          No se han encontrado datos
        </Typography>
      </Box>
    )
    : null
);

NoData.propTypes = {
  elements: PropTypes.number.isRequired,
};

NoData.displayName = 'NoData';
export const story = NoData;
export default memo(NoData);
