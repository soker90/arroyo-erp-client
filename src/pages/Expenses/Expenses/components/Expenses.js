import {
  memo, useCallback, useEffect, useState,
} from 'react';
import { Box, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { PlusCircle as PlusCircleIcon } from 'react-feather';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { BASE_PATH } from 'constants/index';
import { Header, Page, TableMaterial } from 'components';
import NewProviderModal from '../modals/NewProviderModal';
import { useStyles } from './Expenses.styles';

const Expenses = ({ providers, getProviders }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getProviders();
  }, [getProviders]);

  /**
   * Oculta el modal de crear proveedor
   * @type {function(): void}
   * @private
   */
  const _closeModal = useCallback(() => setShowModal(false), [setShowModal]);

  return (
    <>
      <Page className={classes.root} title='Gastos'>
        <Container maxWidth={false}>
          <Header
            title='Gastos'
            buttons={[
              {
                onClick: () => setShowModal(true),
                Icon: PlusCircleIcon,
                label: 'Nuevo',
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
                  title: 'Nota',
                  field: 'note',
                },
              ]}
              data={providers}
              title={`Proveedores de gastos (${providers.length})`}
              actions={[
                {
                  icon: VisibilityIcon,
                  tooltip: 'Editar',
                  component: Link,
                  to: ({ _id }) => `${BASE_PATH}/proveedores/${_id}`,
                },
              ]}
            />
          </Box>
        </Container>
      </Page>
      <NewProviderModal show={showModal} close={_closeModal} />
    </>
  );
};

Expenses.propTypes = {
  providers: PropTypes.array.isRequired,
  getProviders: PropTypes.func.isRequired,
};

Expenses.displayName = 'Expenses';

export const story = Expenses;
export default memo(Expenses);
