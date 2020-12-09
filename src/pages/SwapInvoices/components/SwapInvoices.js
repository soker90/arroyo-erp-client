/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid, IconButton, InputAdornment, Tooltip,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import {
  InputForm, Page,
} from 'components';
import SearchIcon from '@material-ui/icons/Search';
import Header from './Header';
import { useStyles } from './SwapInvoices.styles';

const SwapInvoices = ({ swapInvoices }) => {
  const classes = useStyles();
  const [invoiceA, setInvoiceA] = useState('');
  const [invoiceB, setInvoiceB] = useState('');

  const _renderAdornment = onClick => (
    <InputAdornment position='end'>
      <Tooltip title='Editar'>
        <IconButton onClick={onClick}>
          <SearchIcon />
        </IconButton>
      </Tooltip>
    </InputAdornment>
  );

  const _handleChange = set => ({ target: { value } }) => {
    set(value);
  };
  return (
    <Page className={classes.root} title='Intercambar nº orden'>
      <Container maxWidth={false}>
        <Header />

        <Card className={classes.card}>
          <CardHeader title='Intercambiar números de orden' />
          <Divider />
          <CardContent>
            <Grid spacing={3} container>
              <InputForm
                label='Id Factura 1'
                size={5}
                onChange={_handleChange(setInvoiceA)}
                InputProps={{
                  endAdornment: _renderAdornment(() => {
                  }),
                }}
                value={invoiceA}
              />
              <InputForm
                label='Id Factura 2'
                size={5}
                value={invoiceB}
                onChange={_handleChange(setInvoiceB)}
                InputProps={{
                  endAdornment: _renderAdornment(() => {
                  }),
                }}
              />
              <Grid item md={2} xs={12}>
                <Button
                  color='primary'
                  variant='contained'
                  className={classes.button}
                  onClick={() => swapInvoices(invoiceA, invoiceB)}
                >
                  Intercambiar
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

      </Container>
    </Page>
  );
};

SwapInvoices.propTypes = {
  swapInvoices: PropTypes.func.isRequired,
};

SwapInvoices.displayName = 'SwapInvoices';
export const story = SwapInvoices;
export default memo(SwapInvoices);
