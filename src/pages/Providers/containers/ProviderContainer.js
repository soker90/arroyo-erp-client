import {connect} from 'react-redux';
// import {getProviders} from '../actions';
import Providers from '../components/Providers';

const mapStateToProps = ({providers: {providers}}) => ({
  providers,
});

const mapDispatchToProps = {
  // getProviders,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Providers);
