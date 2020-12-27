import { memo } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

import { LoadingScreen, TableMaterial, TextEuro } from 'components';
import { BASE_PATH } from 'constants/index';
import { format } from 'utils';

const ClientInvoices = ({ invoices, idClient }) => {
  /* useEffect(() => {
    if (idClient) getInvoicesByClient(idClient);
  }, [getInvoicesByClient, idClient]); */

  if (!idClient) return <LoadingScreen />;

  /**
   * Render payment type
   * @param {object} payment
   * @returns {string|null}
   * @private
   */
  const _renderPaymentType = ({ payment }) => (payment?.paid ? payment.type : null);

  return idClient && (
    <TableMaterial
      columns={[
        {
          title: 'Nº de Orden',
          field: 'nOrder',
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
      ]}
      data={invoices}
      actions={[
        {
          icon: EditIcon,
          tooltip: 'Editar',
          component: Link,
          to: ({ _id }) => `${BASE_PATH}/clientes/facturas/${_id}`,
        },
      ]}
    />
  );
};

ClientInvoices.propTypes = {
  invoices: PropTypes.array.isRequired,
  idClient: PropTypes.string,
  // getInvoicesByClient: PropTypes.func.isRequired,
};

ClientInvoices.displayName = 'ProviderInvoices';

export default memo(ClientInvoices);
