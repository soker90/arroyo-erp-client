import { connect } from 'react-redux';

import { getClient, getClientInvoices } from '../modules/actions';
import Client from '../components/Client';

const mapStateToProps = ({ client }) => client;

const mapDispatchToProps = {
  getClient,
  getClientInvoices,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Client);
