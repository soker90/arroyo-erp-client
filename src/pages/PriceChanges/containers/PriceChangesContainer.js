import { connect } from 'react-redux';

import PriceChanges from '../components/PriceChanges';
import {
  changeReadPrice,
  deleteManyChangesPrice,
  getPriceChanges,
  sendTelegramPrices,
} from '../modules/actions';

const mapStateToProps = ({ priceChanges: { priceChanges } }) => ({
  priceChanges,
});

const mapDispatchToProps = {
  getPriceChanges,
  changeReadPrice,
  sendTelegramPrices,
  deleteManyChangesPrice,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PriceChanges);
