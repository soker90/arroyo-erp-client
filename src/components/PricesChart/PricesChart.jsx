import PropTypes from 'prop-types'

import { Card, CardContent, CardHeader } from 'components'
import { format } from 'utils'
import Chart from './Chart'

const PricesChart = ({
  className,
  prices,
  title = 'Gráfico de precios',
  tooltip,
  lineColor,
  ...rest
}) => {
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
      <hr />
      <CardContent>
        <div className='h-[375px] min-h-[500px]'>
          <Chart
            className='h-full'
            data={data}
            labels={labels}
            tooltip={tooltip}
            lineColor={lineColor}
          />
        </div>
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
