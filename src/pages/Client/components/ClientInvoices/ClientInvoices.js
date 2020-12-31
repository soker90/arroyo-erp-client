import { memo } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

import { LoadingScreen, TableMaterial, TextEuro } from 'components';
import { BASE_PATH } from 'constants/index';
import { format } from 'utils';

const ClientInvoices = ({
  invoices, idClient, count, getClientInvoices,
}) => {
  /* useEffect(() => {
    if (idClient) getInvoicesByClient(idClient);
  }, [getInvoicesByClient, idClient]); */

  if (!idClient) return <LoadingScreen />;

  return idClient && (
    <TableMaterial
      columns={[
        {
          title: 'Fecha',
          field: 'date',
          render: ({ date }) => format.date(date),
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
      count={count}
      refresh={({ offset, limit }) => {
        getClientInvoices(idClient, offset, limit);
      }}
    />
  );
};

ClientInvoices.propTypes = {
  invoices: PropTypes.array.isRequired,
  idClient: PropTypes.string,
  count: PropTypes.number.isRequired,
  getClientInvoices: PropTypes.func.isRequired,
};

ClientInvoices.displayName = 'ProviderInvoices';

export default memo(ClientInvoices);
