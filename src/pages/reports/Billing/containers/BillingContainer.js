import { connect } from 'react-redux';

import { getBilling } from '../modules/actions';
import Billing from '../components/Billing';

const mapStateToProps = ({ billing }) => billing;

const mapDispatchToProps = {
  getBilling,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Billing);
