import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { TOTALS_BOXES } from '../constans';
import TotalsReportBox from './TotalsReportBox';

const TotalsReportBoxes = ({
  totals,
}) => (
  <Grid
    container
    spacing={3}
  >
    {TOTALS_BOXES?.map(box => (
      <TotalsReportBox
        key={box.value}
        title={box.title}
        value={totals[box.value]}
        size={box.size}
      />
    ))}
  </Grid>
);

TotalsReportBoxes.propTypes = {
  totals: PropTypes.object.isRequired,
};

export default TotalsReportBoxes;
