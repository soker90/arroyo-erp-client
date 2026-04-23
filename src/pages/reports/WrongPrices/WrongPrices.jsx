import { Eye, Wand } from 'lucide-react'
import { Link } from 'react-router'

import { Header, Page, TableMaterial, TextEuro, Container } from 'components'
import { BASE_PATH } from 'constants/index'
import { format } from 'utils'

import { useWrongPrices } from './hooks'

const WrongPrices = () => {
  const { products, fixPrices } = useWrongPrices()

  return (
    <Page className='py-6' title='Precios y costos erróneos'>
      <Container>
        <Header
          title='Precios y costos erróneos'
          description='Productos con errores en el precio o el costo'
          buttons={[{
            onClick: fixPrices,
            Icon: Wand,
            label: 'Corregir todos',
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
              title: 'Precio',
              render: ({ badPrice, goodPrice, wrongPrice }) => wrongPrice
                ? (
                  <span className='text-sm'>
                    <TextEuro num={badPrice} className='text-red-600 line-through' />
                    {' → '}
                    <TextEuro num={goodPrice} className='font-semibold text-green-600' />
                  </span>
                )
                : <TextEuro num={goodPrice} />
            },
            {
              title: 'Costo',
              render: ({ badCost, goodCost, wrongCost }) => wrongCost
                ? (
                  <span className='text-sm'>
                    <TextEuro num={badCost} className='text-red-600 line-through' />
                    {' → '}
                    <TextEuro num={goodCost} className='font-semibold text-green-600' />
                  </span>
                )
                : <TextEuro num={goodCost} />
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
