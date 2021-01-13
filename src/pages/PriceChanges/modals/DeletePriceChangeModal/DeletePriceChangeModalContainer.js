import { connect } from 'react-redux';

import DeletePriceChangeModal from './DeletePriceChangeModal';
import { deletePriceChanges, deleteManyChangesPrice } from '../../modules/actions';

const mapDispatchToProps = {
  deletePriceChanges,
  deleteManyChangesPrice,
};

export default connect(
  null,
  mapDispatchToProps,
)(DeletePriceChangeModal);
