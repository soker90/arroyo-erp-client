import VisibilityIcon from '@mui/icons-material/Visibility'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import { Link } from 'react-router-dom'

import { Header, Page, TableMaterial, TextEuro, Container } from 'components'
import { BASE_PATH } from 'constants/index'
import { format } from 'utils'

import { useWrongPrices } from './hooks'
import { useStyles } from './WrongPrices.styles'

const WrongPrices = () => {
  const { products, fixPrices } = useWrongPrices()
  const classes = useStyles()

  return (
    <Page className={classes.root} title='Precios erróneos'>
      <Container>
        <Header
          title='Precios erróneos'
          description='Productos con errores en el precio'
          buttons={[{
            onClick: fixPrices,
            Icon: AutoFixHighIcon,
            label: 'Corregir',
            variant: 'contained',
            disableSvg: true
          }]}
        />

        <TableMaterial
          className={classes.table}
          columns={[
            {
              title: 'Proveedor',
              field: 'provider'
            },
            {
              title: 'Producto',
              field: 'name'
            },
            {
              title: 'Fecha',
              render: ({ date }) => format.date(date)
            },
            {
              title: 'Bueno',
              render: ({ goodPrice }) => <TextEuro num={goodPrice} />
            },
            {
              title: 'Malo',
              render: ({ badPrice }) => <TextEuro num={badPrice} />
            }
          ]}
          data={products}
          actions={[
            {
              icon: VisibilityIcon,
              tooltip: 'Ver producto',
              component: Link,
              to: ({ id }) => `${BASE_PATH}/productos/${id}`
            }
          ]}
        />
      </Container>
    </Page>
  )
}

export default WrongPrices
