import { connect } from 'react-redux'

import { createReminder, deleteReminder, getDashboard } from '../modules/actions'
import DashboardView from '../components/DashboardView'

const mapStateToProps = ({ dashboard, priceChanges }) => ({
  ...dashboard, priceChanges: priceChanges.count
})

const mapDispatchToProps = {
  createReminder,
  deleteReminder,
  getDashboard
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardView)
