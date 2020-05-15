import {connect} from 'react-redux';
import Providers from '../components/Providers';

const mapStateToProps = ({providers: {providers}}) => ({
  providers,
});

export default connect(
  mapStateToProps,
)(Providers);
