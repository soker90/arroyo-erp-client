import { connect } from 'react-redux';

import { updateDataInvoice } from 'pages/Invoice/modules/actions';
import EditInvoiceDataModalView from './EditInvoiceDataModalView';

const mapStateToProps = ({ invoice: { data, id } }) => ({
  ...data,
  id,
});

const mapDispatchToProps = {
  updateDataInvoice,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditInvoiceDataModalView);
