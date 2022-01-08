import {
  useCallback, useEffect, useState,
} from 'react';
import { Box, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { PlusCircle as PlusCircleIcon } from 'react-feather';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { BASE_PATH } from 'constants/index';
import { Header, Page, TableMaterial } from 'components';
import { useStyles } from './Clients.styles';
import NewProviderModal from '../modals/NewClientModal';

const Clients = ({ clients, getClients }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getClients();
  }, [getClients]);

  const _hrefRow = ({ _id }) => `${BASE_PATH}/clientes/${_id}`;

  /**
   * Oculta el modal de crear proveedor
   * @type {function(): void}
   * @private
   */
  const _closeModal = useCallback(() => setShowModal(false), [setShowModal]);

  return (
    <>
      <Page className={classes.root} title='Clientes'>
        <Container maxWidth={false}>
          <Header
            title='Clientes'
            buttons={[
              {
                onClick: () => setShowModal(true),
                Icon: PlusCircleIcon,
                label: 'Nuevo Cliente',
              },
            ]}
          />
          <Box mt={3}>
            <TableMaterial
              className={classes.table}
              columns={[
                {
                  title: 'Nombre',
                  field: 'name',
                },
                {
                  title: 'Facturas',
                  field: 'invoices',
                },
                {
                  title: 'Fac. pendientes',
                  field: 'pending',
                },
              ]}
              data={clients}
              title={`Clientes (${clients.length})`}
              actions={[
                {
                  icon: VisibilityIcon,
                  tooltip: 'Editar',
                  component: Link,
                  to: _hrefRow,
                },
              ]}
              href={_hrefRow}
            />
          </Box>
        </Container>
      </Page>
      <NewProviderModal show={showModal} close={_closeModal} />
    </>
  );
};

Clients.propTypes = {
  clients: PropTypes.array.isRequired,
  getClients: PropTypes.func.isRequired,
};

Clients.displayName = 'Clients';

export const story = Clients;
export default Clients;
