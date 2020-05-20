/* eslint-disable react-hooks/exhaustive-deps */
import React, {memo} from 'react';
import {Box, Card, Container} from '@material-ui/core';
import PropTypes from 'prop-types';

import {Header, Page} from 'components';
import {useStyles} from 'pages/Providers/Provider/components/Provider.styles';


const Provider = ({products, match: {params: {idProvider}}}) => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title='Nuevo albarán'>
      <Container maxWidth={false} className={classes.container}>
        <Header
          routes={[{
            link: `/app/proveedores/${idProvider}`,
            title: 'Proveedor X',
          },
            {
              link: `/app/proveedores/${idProvider}#Albaranes`,
              title: 'Albaranes',
            }]}
          title='Nuevo'
        />

        <Card className={classes.tabs}>

        </Card>

        <Box py={3} pb={6}>

        </Box>

      </Container>
    </Page>
  );
};

Provider.propTypes = {
  provider: PropTypes.object.isRequired,
  billing: PropTypes.object,
  getProvider: PropTypes.func.isRequired,
  showEditModal: PropTypes.func.isRequired,
};

Provider.displayName = 'Providers';

export default memo(Provider);
