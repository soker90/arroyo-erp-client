import PropTypes from 'prop-types'
import { Grid } from 'components'

import { ItemCard } from 'components/Cards'

const ProductItemCard = ({ title, value, size = 3 }) => (
  <Grid item xs={12} md={size}>
    <ItemCard label={title} value={value} />
  </Grid>
)

ProductItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  size: PropTypes.number
}

export default ProductItemCard
