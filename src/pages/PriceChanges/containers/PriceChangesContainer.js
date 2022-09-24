import { connect } from 'react-redux';

import PriceChanges from '../components/PriceChanges';
import {
  changeReadPrice,
  deleteManyChangesPrice,
  getPriceChanges,
} from '../modules/actions';

const mapStateToProps = ({ priceChanges: { priceChanges } }) => ({
  priceChanges,
});

const mapDispatchToProps = {
  getPriceChanges,
  changeReadPrice,
  deleteManyChangesPrice,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PriceChanges);
