import { connect } from 'react-redux';

import { getCash, getCheques } from '../modules/actions';
import PaymentsReportView from '../components/PaymentsReportView';

const mapStateToProps = ({
  paymentsReport,
}) => paymentsReport;

const mapDispatchToProps = {
  getCash,
  getCheques,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentsReportView);
