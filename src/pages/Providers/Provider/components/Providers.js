import React, {memo} from 'react';
import {Container, Box} from '@material-ui/core';
import PropTypes from 'prop-types';

import {Header, Page} from 'components';
import {useStyles} from './Providers.styles';

const Providers = ({provider}) => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Proveedores">
      <Container maxWidth={false} className={classes.container}>
        <Header title="Provedores"/>
        <Box mt={3}>

        </Box>
      </Container>
    </Page>
  );
};

Providers.propTypes = {
  getProviders: PropTypes.func.isRequired,
  providers: PropTypes.array.isRequired,
};

Providers.displayName = 'Providers';

export default memo(Providers);
