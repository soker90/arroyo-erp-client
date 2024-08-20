import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { useEffect, useRef, useState } from 'react'

import { cn } from 'utils'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Chart = ({
  className,
  data: dataProp,
  labels,
  tooltip = 'Precio',
  lineColor,
  ...rest
}) => {
  const chartRef = useRef(null)
  const [chartData, setChartData] = useState({
    datasets: [],
    labels: []
  })

  const data = chart => {
    // const ctx = canvas.getContext('2d');
    const gradient = chart.ctx.createLinearGradient(0, 0, 0, 400)

    gradient.addColorStop(0, 'rgba(138, 133, 255, 0.2)')
    gradient.addColorStop(0.9, 'rgba(255,255,255,0)')
    gradient.addColorStop(1, 'rgba(255,255,255,0)')

    return {
      datasets: [
        {
          data: dataProp,
          backgroundColor: gradient,
          borderColor: lineColor ?? 'rgb(138, 133, 255)',
          pointBorderColor: '#fff',
          pointBorderWidth: 3,
          pointRadius: 6,
          pointBackgroundColor: lineColor ?? 'rgb(138, 133, 255)'
        }
      ],
      labels
    }
  }

  useEffect(() => {
    const chart = chartRef.current

    if (chart) setChartData(data(chart))
  }, [dataProp])

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        caretSize: 10,
        yPadding: 20,
        xPadding: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.12)',
        backgroundColor: '#fff',
        titleColor: '#263238',
        bodyColor: '#546e7a',
        footerColor: '#546e7a',
        callbacks: {
          title: () => {
          },
          label: tooltipItem => {
            let label = `${tooltip}: ${tooltipItem.parsed.y}`

            if (tooltipItem.parsed.y > 0) label += '€'

            return label
          }
        }
      }
    },
    layout: {
      padding: 0
    },
    scales: {
      x:
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            padding: 20,
            fontColor: '#546e7a'
          }
        },
      y:
        {
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: 'rgba(0, 0, 0, 0.12)',
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: 'rgba(0, 0, 0, 0.12)'
          },
          ticks: {
            padding: 20,
            fontColor: '#546e7a',
            beginAtZero: true,
            min: 0,
            maxTicksLimit: 7,
            precision: 2,
            callback: value => (value > 0 ? `${value}€` : value)
          }
        }
    }
  }

  return (
    <div
      className={cn('relative', className)}
      {...rest}
    >
      <Line
        ref={chartRef}
        data={chartData}
        options={options}
      />
    </div>
  )
}

Chart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  lineColor: PropTypes.string,
  tooltip: PropTypes.string
}

export default Chart
