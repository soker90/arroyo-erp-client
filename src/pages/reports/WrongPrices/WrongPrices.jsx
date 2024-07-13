import { Eye, Wand } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Header, Page, TableMaterial, TextEuro, Container } from 'components'
import { BASE_PATH } from 'constants/index'
import { format } from 'utils'

import { useWrongPrices } from './hooks'

const WrongPrices = () => {
  const { products, fixPrices } = useWrongPrices()

  return (
    <Page className='py-6' title='Precios erróneos'>
      <Container>
        <Header
          title='Precios erróneos'
          description='Productos con errores en el precio'
          buttons={[{
            onClick: fixPrices,
            Icon: Wand,
            label: 'Corregir',
            variant: 'contained'
          }]}
        />

        <TableMaterial
          className='mt-4'
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
              icon: Eye,
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
