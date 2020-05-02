import React, {memo, useEffect} from 'react';
import {Container} from '@material-ui/core';
import PropTypes from 'prop-types';

import {Header, Page} from 'components';
import {useStyles} from './Providers.styles';
import {navigateTo} from 'utils';
import Box from '@material-ui/core/Box';

const Providers = ({providers, getProviders}) => {
  const classes = useStyles();
  /*useEffect(() => {
    getProviders();
  }, [getProviders]);*/

  const _onRowClick = (event, row) => {
    navigateTo(`proveedor/${row._id}`)
  };

  return (
    <Page className={classes.root} title="Detalle de tarificación">
      <Container maxWidth={false} className={classes.container}>
        <Header title="Provedores"/>
        <Box mt={3}>

        </Box>
      </Container>
    </Page>
  )
};

Providers.propTypes = {
  getProviders: PropTypes.func.isRequired,
  providers: PropTypes.array.isRequired,
};

Providers.displayName = 'Providers';

export default memo(Providers);
