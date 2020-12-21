/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import { Page } from 'components';
import Header from './Header';
import { useStyles } from './Book.styles';
import InvoicesTable from './InvoicesTable';
import SearchForm from './SearchForm/SearchForm';

const Book = ({
  invoices,
  getInvoices,
}) => {
  const classes = useStyles();
  const { year } = useParams();

  useEffect(() => {
    getInvoices(year);
  }, [year]);

  return (
    <Page className={classes.root} title='Libro'>
      <Container maxWidth={false}>
        <Header year={Number(year)} />
        <SearchForm />

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
