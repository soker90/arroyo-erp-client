import { connect } from 'react-redux';

import MergePaymentModal from './MergePaymentModal';

const mapDispatchToProps = {
  // mergePayments: () => {},
};

export default connect(
  null,
  mapDispatchToProps,
)(MergePaymentModal);
