import { connect } from 'react-redux';

import { updateDataInvoice } from 'pages/Invoice/modules/actions';
import EditInvoiceDataModalView from './EditInvoiceTotalsModalView';

const mapStateToProps = ({ invoice: { totals, id } }) => ({
  ...totals,
  id,
});

const mapDispatchToProps = {
  updateDataInvoice,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditInvoiceDataModalView);
