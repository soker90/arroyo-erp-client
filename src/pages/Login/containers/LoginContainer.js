import {connect} from 'react-redux';
import LoginView from '../components';
import {login, logout} from 'actions/auth';

const mapStateToProps = ({auth}) => ({
  loginError: auth?.loginError,
});

const mapDispatchToProps = {
  login,
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView);
