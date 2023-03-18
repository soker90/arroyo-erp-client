import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Box, Card, CardContent, CardHeader, Divider
} from '@mui/material'
import { format } from 'utils'
import Chart from './Chart'
import { useStyles } from './PricesChart.styles'

const PricesChart = ({
  className,
  prices,
  title = 'Gráfico de precios',
  tooltip,
  lineColor,
  ...rest
}) => {
  const classes = useStyles()

  const data = prices.map(({ price }) => Math.round(price * 100) / 100)
  const labels = prices.map(({ date }) => format.date(date))

  return (
    <Card
      className={className}
      {...rest}
    >
      <CardHeader
        title={title}
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
              tooltip={tooltip}
              lineColor={lineColor}
            />
          </Box>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  )
}

PricesChart.propTypes = {
  className: PropTypes.string,
  prices: PropTypes.array,
  tooltip: PropTypes.string,
  title: PropTypes.string,
  lineColor: PropTypes.string
}

export default PricesChart
