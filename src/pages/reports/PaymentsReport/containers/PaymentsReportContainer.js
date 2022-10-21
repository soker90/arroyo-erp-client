import { connect } from 'react-redux'

import { getTotals, getCheques } from '../modules/actions'
import PaymentsReportView from '../components/PaymentsReportView'

const mapStateToProps = ({
  paymentsReport
}) => paymentsReport

const mapDispatchToProps = {
  getTotals,
  getCheques
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentsReportView)
