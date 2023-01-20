import { connect } from 'react-redux'
import { getProducts } from 'modules/products/actions'
import ProductsReport from '../components/ProductsReport'

const mapStateToProps = (
  {
    providers: { providers },
    products: { products }
  }
) => ({
  providers,
  products
})

const mapDispatchToProps = {
  getProducts
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsReport)
