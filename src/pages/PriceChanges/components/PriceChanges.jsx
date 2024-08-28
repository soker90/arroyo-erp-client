import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { TrashIcon, ReceiptTextIcon, ShoppingCart, CircleCheckBigIcon } from 'lucide-react'

import { BASE_PATH } from 'constants/index'
import { Page, TableMaterial, TextEuro, Container } from 'components'
import { addSelectedToState, format, removeSelectedFromState } from 'utils'
import DeletePriceChangeModal from '../modals/DeletePriceChangeModal'
import Header from './Header'
import { usePriceChanges } from '../hooks'

const PriceChanges = () => {
  const [deleteId, setDeleteId] = useState(undefined)
  const [selected, setSelected] = useState([])
  const {
    priceChanges,
    changeReadPrice,
    deleteManyChangesPrice,
    deletePriceChanges
  } = usePriceChanges()

  const _rowStyle = ({ read }) => (!read && 'bg-gray-200')

  const _handleClickRead = ({
    _id,
    read
  }) => {
    changeReadPrice(_id, !read)
  }

  const _handleClickDelete = ({ _id }) => {
    setDeleteId(_id)
  }

  /**
   * Toggle checkbox
   * @param {String} id
   * @param {Object} event
   * @private
   */
  const _handleChangeCheckbox = (event, { _id }) => {
    const func = selected.includes(_id) ? removeSelectedFromState : addSelectedToState
    func(_id, selected, setSelected)
  }

  const _close = useCallback(() => {
    setDeleteId(undefined)
  }, [setDeleteId])

  return (
    <>
      <Page className='min-h-full py-6' title='Cambio de precios'>
        <Container>
          <Header
            selected={selected}
            setSelected={setSelected}
            deleteManyChangesPrice={deleteManyChangesPrice}
            deletePriceChanges={deletePriceChanges}
          />
          <TableMaterial
            className='mt-6'
            columns={[
              {
                title: 'Fecha',
                render: ({ date }) => format.date(date)
              },
              {
                title: 'Nombre',
                field: 'productName'
              },
              {
                title: 'Precio',
                render: ({ price }) => <TextEuro num={price} />
              },
              {
                title: 'Diferencia',
                render: ({ diff }) => (diff !== undefined ? <TextEuro num={diff} /> : 'Sin datos')
              },
              {
                title: 'Coste',
                render: ({ cost }) => <TextEuro num={cost} />
              }
            ]}
            data={priceChanges}
            title={`Cambios (${priceChanges.length})`}
            actions={[
              {
                icon: CircleCheckBigIcon,
                tooltip: 'Marcar leído',
                onClick: _handleClickRead
              },
              {
                icon: ShoppingCart,
                tooltip: 'Producto',
                component: Link,
                to: ({ product }) => `${BASE_PATH}/productos/${product}`
              },
              {
                icon: ReceiptTextIcon,
                tooltip: 'Albarán',
                component: Link,
                to: ({ deliveryOrder }) => `${BASE_PATH}/albaranes/${deliveryOrder}`
              },
              {
                icon: TrashIcon,
                tooltip: 'Borrar',
                onClick: _handleClickDelete
              }
            ]}
            rowClass={_rowStyle}
            multiSelect={row => selected.includes(row._id)}
            onSelected={_handleChangeCheckbox}
          />
        </Container>
      </Page>
      <DeletePriceChangeModal
        id={deleteId} close={_close}
        deleteManyChangesPrice={deleteManyChangesPrice}
        deletePriceChanges={deletePriceChanges}
      />
    </>
  )
}

export default PriceChanges
