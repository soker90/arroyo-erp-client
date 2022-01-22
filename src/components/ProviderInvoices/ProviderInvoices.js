/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { LoadingScreen, TableMaterial, TextEuro } from 'components';
import { BASE_PATH } from 'constants/index';
import { format } from 'utils';
import LabelPending from '../LabelPending';

const ProviderInvoices = ({
  invoices,
  getInvoicesByProvider,
  idProvider,
  invoicesCount,
}) => {
  useEffect(() => {
    if (idProvider) getInvoicesByProvider({ provider: idProvider });
  }, [getInvoicesByProvider, idProvider]);

  if (!idProvider) return <LoadingScreen />;

  const _refresh = ({
    offset,
    limit,
  }) => {
    getInvoicesByProvider({
      provider: idProvider,
      offset,
      limit,
    });
  };
  /**
   * Render payment type
   * @param {object} payment
   * @returns {string|null}
   * @private
   */
  const _renderPaymentType = ({ payment }) => (payment?.paid ? payment.type : null);

  /**
   * Render mail icon
   * @param {boolean | undefined} mailSend
   * @return {JSX.Element|boolean}
   * @private
   */
  const _renderEmail = ({ mailSend }) => (mailSend ? <MailOutlineIcon /> : false);

  return idProvider && (
    <TableMaterial
      columns={[
        {
          title: 'Nº de Orden',
          render: ({ nOrder }) => nOrder || <LabelPending />,
        },
        {
          title: 'Fecha de factura',
          render: ({ dateInvoice }) => format.date(dateInvoice),
        },
        {
          title: 'Nº de factura',
          field: 'nInvoice',
        },
        {
          title: 'Importe',
          // eslint-disable-next-line react/prop-types
          render: ({ total }) => <TextEuro num={total} />,
        },
        {
          title: 'Pago',
          render: _renderPaymentType,
        },
        {
          title: 'Por correo',
          render: _renderEmail,
        },
      ]}
      data={invoices}
      actions={[
        {
          icon: EditIcon,
          tooltip: 'Editar',
          component: Link,
          to: ({ _id }) => `${BASE_PATH}/facturas/${_id}`,
        },
      ]}
      count={invoicesCount}
      refresh={_refresh}
    />
  );
};

ProviderInvoices.propTypes = {
  invoices: PropTypes.array.isRequired,
  idProvider: PropTypes.string,
  getInvoicesByProvider: PropTypes.func.isRequired,
  invoicesCount: PropTypes.number.isRequired,
};

ProviderInvoices.displayName = 'ProviderInvoices';

export default ProviderInvoices;
