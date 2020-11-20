import { connect } from 'react-redux';

import { getClient } from '../modules/actions';
import Client from '../components/Client';

const mapStateToProps = ({ client: { client } }) => ({
  client,
});

const mapDispatchToProps = {
  getClient,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Client);
