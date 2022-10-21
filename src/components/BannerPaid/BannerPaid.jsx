import { Alert } from '@mui/material';
import PropTypes from 'prop-types';
import { format } from '../../utils';

const BannerPaid = ({
  paid,
  paymentDate,
  paymentType,
  className,
}) => (
  <Alert severity={paid ? 'success' : 'error'} className={className} variant='filled'>
    {!paid && 'NO '}
    PAGADO
    {paid && ` el ${format.date(paymentDate)} con ${paymentType}`}
  </Alert>
);

BannerPaid.propTypes = {
  className: PropTypes.string,
  paid: PropTypes.bool.isRequired,
  paymentDate: PropTypes.number,
  paymentType: PropTypes.string,
};

export const story = BannerPaid;
export default BannerPaid;
