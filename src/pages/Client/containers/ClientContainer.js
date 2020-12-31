import { connect } from 'react-redux';

import { getClient, getClientInvoices, createClientInvoice } from '../modules/actions';
import Client from '../components/Client';

const mapStateToProps = ({ client }) => client;

const mapDispatchToProps = {
  getClient,
  getClientInvoices,
  createClientInvoice,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Client);
