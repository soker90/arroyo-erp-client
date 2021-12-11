/* eslint-disable react-hooks/exhaustive-deps */
import { memo } from 'react';
import { Container } from '@mui/material';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import { Page } from 'components';

import Header from './Header';
import { useStyles } from './Book.styles';
import InvoicesTable from './InvoicesTable';
import SearchForm from './SearchForm';
import { useInvoices } from '../hooks/useInvoices';

const Book = ({
  invoices,
  count,
}) => {
  const { year } = useParams();

  const classes = useStyles();
  const {
    filters,
    setFilters,
  } = useInvoices(year);

  return (
    <Page className={classes.root} title='Libro'>
      <Container maxWidth={false}>
        <Header year={Number(year)} filter={filters} />
        <SearchForm setFilters={setFilters} filters={filters} />

        <InvoicesTable invoices={invoices} count={count} setFilters={setFilters} />
      </Container>
    </Page>
  );
};
Book.propTypes = {
  invoices: PropTypes.array.isRequired,
  count: PropTypes.number,
};

Book.displayName = 'Book';
export const story = Book;
export default memo(Book);
