import { connect } from 'react-redux';

import Expenses from '../components/Expenses';
import { getProviders } from '../modules/actions';

const mapStateToProps = ({ expenses: { providers } }) => ({
  providers,
});

const mapDispatchToProps = {
  getProviders,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Expenses);
