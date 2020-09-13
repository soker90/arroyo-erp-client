import { connect } from 'react-redux';

import Expenses from '../components/Expenses';

const mapStateToProps = ({ providers: { providers } }) => ({
  providers,
});

export default connect(
  mapStateToProps
)(Expenses);
