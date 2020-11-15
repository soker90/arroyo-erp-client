import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box, Card, CardContent, CardHeader, Divider,
} from '@material-ui/core';
import { format } from 'utils';
import Chart from './Chart';
import { useStyles } from './PricesChart.styles';

const PricesChart = ({ className, prices, ...rest }) => {
  const classes = useStyles();

  const data = prices.map(({ price }) => price);
  const labels = prices.map(({ date }) => format.date(date));

  return (
    <Card
      className={className}
      {...rest}
    >
      <CardHeader
        title='Gráfico de precios'
      />
      <Divider />
      <CardContent>
        <PerfectScrollbar>
          <Box
            height={375}
            minWidth={500}
          >
            <Chart
              className={classes.chart}
              data={data}
              labels={labels}
            />
          </Box>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

PricesChart.propTypes = {
  className: PropTypes.string,
  prices: PropTypes.array,
};

export default PricesChart;
