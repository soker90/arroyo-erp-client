import { connect } from 'react-redux';

import PriceChanges from '../components/PriceChanges';
import { getPriceChanges, changeReadPrice } from '../modules/actions';

const mapStateToProps = ({ priceChanges: { priceChanges } }) => ({
  priceChanges,
});

const mapDispatchToProps = {
  getPriceChanges,
  changeReadPrice,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceChanges);
