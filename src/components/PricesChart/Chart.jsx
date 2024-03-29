import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'
import { alpha, useTheme } from '@mui/material'
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

import makeStyles from '@mui/styles/makeStyles'
import { useEffect, useRef, useState } from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative'
  }
}))

const Chart = ({
  className,
  data: dataProp,
  labels,
  tooltip = 'Precio',
  lineColor,
  ...rest
}) => {
  const classes = useStyles()
  const theme = useTheme()

  const chartRef = useRef(null)
  const [chartData, setChartData] = useState({
    datasets: [],
    labels: []
  })

  const data = chart => {
    // const ctx = canvas.getContext('2d');
    const gradient = chart.ctx.createLinearGradient(0, 0, 0, 400)

    gradient.addColorStop(0, alpha(theme.palette.secondary.main, 0.2))
    gradient.addColorStop(0.9, 'rgba(255,255,255,0)')
    gradient.addColorStop(1, 'rgba(255,255,255,0)')

    return {
      datasets: [
        {
          data: dataProp,
          backgroundColor: gradient,
          borderColor: lineColor ?? theme.palette.secondary.main,
          pointBorderColor: theme.palette.background.default,
          pointBorderWidth: 3,
          pointRadius: 6,
          pointBackgroundColor: lineColor ?? theme.palette.secondary.main
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
        borderColor: theme.palette.divider,
        backgroundColor: theme.palette.background.default,
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.secondary,
        footerColor: theme.palette.text.secondary,
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
            fontColor: theme.palette.text.secondary
          }
        },
      y:
        {
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          },
          ticks: {
            padding: 20,
            fontColor: theme.palette.text.secondary,
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
      className={clsx(classes.root, className)}
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
