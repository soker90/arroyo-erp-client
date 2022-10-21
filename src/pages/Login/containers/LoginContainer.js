import { connect } from 'react-redux'
import { login, logout } from 'actions/auth'
import LoginView from '../components'

const mapStateToProps = ({ auth }) => ({
  loginError: auth?.loginError
})

const mapDispatchToProps = {
  login,
  logout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)
