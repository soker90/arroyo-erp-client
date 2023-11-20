import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Card, CardContent, CardHeader, Divider, Grid, IconButton, Tooltip
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

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
          title='Totales'
          action={provider && [
            <Tooltip title='Editar' key='edit-product-data'>
              <IconButton
                size='small'
                onClick={_handleEditClick}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
          ]}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            {generateLabels(product, provider)
              .map(item => <ProductItemCard {...item} key={item.title} />)}
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
