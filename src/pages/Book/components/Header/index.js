import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Header } from 'components';

const HeaderBook = ({ year }) => (
  <Header
    title='Libro'
    description={`Libro contable ${year}`}
  />
);

HeaderBook.propTypes = {
  year: PropTypes.string.isRequired,
};

HeaderBook.displayName = 'HeaderBook';
export const story = HeaderBook;
export default memo(HeaderBook, () => false);
