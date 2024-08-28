import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import { PencilIcon } from 'lucide-react'
import uniqId from 'uniqid'

import { Card, CardContent, CardHeader, Tooltip, Grid, Button } from 'components'

import ProductItemCard from './ProductItemCard'
import { generateLabels } from './utils'
import EditProductModal from '../../modals/EditProductModal'

const ProductData = ({
  product,
  className,
  provider,
  editProduct
}) => {
  const [showModal, setShowModal] = useState(false)

  /**
   * Close the modal
   * @private
   */
  const _closeModal = useCallback(() => setShowModal(false), [setShowModal])

  /**
   * Show the modal
   * @private
   */
  const _handleEditClick = () => {
    setShowModal(true)
  }

  return (
    <>
      <Card className={className}>
        <CardHeader
          title='Datos'
          action={provider && [
            <Tooltip title='Editar' key={uniqId()}>
              <Button
                size='icon'
                variant='icon'
                onClick={_handleEditClick}
              >
                <PencilIcon size={20} />
              </Button>
            </Tooltip>
          ]}
        />
        <hr />
        <CardContent>
          <Grid container spacing={3}>
            {generateLabels(product, provider)
              .map(item => <ProductItemCard {...item} key={uniqId()} />)}
          </Grid>
        </CardContent>
      </Card>
      <EditProductModal
        show={showModal} close={_closeModal} product={product}
        editProduct={editProduct}
      />
    </>
  )
}

ProductData.propTypes = {
  product: PropTypes.object.isRequired,
  className: PropTypes.string,
  provider: PropTypes.string,
  editProduct: PropTypes.func.isRequired
}

export const story = ProductData
export default ProductData
