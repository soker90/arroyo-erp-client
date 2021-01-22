/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, useReducer } from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import { Page } from 'components';
import { format } from 'utils';

import Header from './Header';
import { useStyles } from './Book.styles';
import InvoicesTable from './InvoicesTable';
import SearchForm from './SearchForm';
import { INITIAL_STATE } from '../constans';

const Book = ({
  invoices,
  getInvoices,
  count,
}) => {
  const [state, setState] = useReducer(
    (oldstate, newState) => ({ ...oldstate, ...newState }),
    INITIAL_STATE,
  );

  const classes = useStyles();
  const { year } = useParams();

  const _getData = useCallback((pagination = {}) => {
    const {
      total,
      dateInvoice,
      numCheque,
      nInvoice,
      nameProvider,
      expenses,
    } = state;
    getInvoices(year, {
      ...(dateInvoice && { dateInvoice: format.dateToSend(dateInvoice) }),
      ...(total && { total }),
      ...(numCheque && { numCheque }),
      ...(nInvoice && { nInvoice }),
      ...(nameProvider && { nameProvider }),
      ...(expenses && { expenses }),
      ...pagination,
    });
  }, [state, year]);

  return (
    <Page className={classes.root} title='Libro'>
      <Container maxWidth={false}>
        <Header year={Number(year)} filter={state} />
        <SearchForm getInvoices={_getData} year={year} state={state} setState={setState} />

        <InvoicesTable invoices={invoices} count={count} getInvoices={_getData} />
      </Container>
    </Page>
  );
};
Book.propTypes = {
  invoices: PropTypes.array.isRequired,
  getInvoices: PropTypes.func.isRequired,
  count: PropTypes.number,
};

Book.displayName = 'Book';
export const story = Book;
export default memo(Book);
