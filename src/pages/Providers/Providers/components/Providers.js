import React, { memo, useState } from 'react';
import { Box, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { PlusCircle as PlusCircleIcon } from 'react-feather';

import { Header, Page, TableMaterial } from 'components';

import { BASE_PATH } from 'constants/index';
import { useStyles } from './Providers.styles';
import NewProviderModal from '../modals/NewProviderModal';

const Providers = ({ providers }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  /**
   * Navega al proveedor seleccionado
   * @param {String} _id
   * @private
   */
  const _hrefRow = ({ _id }) => `${BASE_PATH}/proveedores/${_id}`;

  return (
    <>
      <Page className={classes.root} title="Proveedores">
        <Container maxWidth={false} className={classes.container}>
          <Header
            title="Provedores"
            buttons={[
              {
                onClick: () => setShowModal(true),
                Icon: PlusCircleIcon,
                label: 'Nuevo Proveedor2',
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
              ]}
              data={providers}
              title={`Proveedores (${providers.length})`}
              href={_hrefRow}
            />
          </Box>
        </Container>
      </Page>
      <NewProviderModal show={showModal} close={setShowModal} />
    </>
  );
};

Providers.propTypes = {
  providers: PropTypes.array.isRequired,
};

Providers.displayName = 'Providers';

export const story = Providers;
export default memo(Providers);
