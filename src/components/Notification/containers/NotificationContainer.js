import { connect } from 'react-redux';
import Notification from '../components/Notification';

const mapStateToProps = ({ notifications }) => ({
  notification: notifications.notification,
});

export default connect(mapStateToProps)(Notification);
