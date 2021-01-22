/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useReducer } from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import { Page } from 'components';
import Header from './Header';
import { useStyles } from './Book.styles';
import InvoicesTable from './InvoicesTable';
import SearchForm from './SearchForm';
import { INITIAL_STATE } from '../constans';

const Book = ({
  invoices,
  getInvoices,
}) => {
  const [state, setState] = useReducer(
    (oldstate, newState) => ({ ...oldstate, ...newState }),
    INITIAL_STATE
  );

  const classes = useStyles();
  const { year } = useParams();

  return (
    <Page className={classes.root} title='Libro'>
      <Container maxWidth={false}>
        <Header year={Number(year)} filter={state} />
        <SearchForm getInvoices={getInvoices} year={year} state={state} setState={setState} />

        <InvoicesTable invoices={invoices} />
      </Container>
    </Page>
  );
};
Book.propTypes = {
  invoices: PropTypes.array.isRequired,
  getInvoices: PropTypes.func.isRequired,
};

Book.displayName = 'Book';
export const story = Book;
export default memo(Book);
