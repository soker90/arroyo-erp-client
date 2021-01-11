import { connect } from 'react-redux';

import PriceChanges from '../components/PriceChanges';
import { changeReadPrice, getPriceChanges, sendTelegramPrices } from '../modules/actions';

const mapStateToProps = ({ priceChanges: { priceChanges } }) => ({
  priceChanges,
});

const mapDispatchToProps = {
  getPriceChanges,
  changeReadPrice,
  sendTelegramPrices,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PriceChanges);
