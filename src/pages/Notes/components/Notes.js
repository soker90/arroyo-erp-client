/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Page } from 'components';
import Header from './Header';
import NotesTable from './NotesTable';
import { useStyles } from './Notes.styles';

const Notes = ({ notes, getNotes }) => {
  const classes = useStyles();

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return (
    <Page className={classes.root} title='Notas'>
      <Container maxWidth={false}>
        <Header />

        <NotesTable notes={notes} />
      </Container>
    </Page>
  );
};
Notes.propTypes = {
  notes: PropTypes.array.isRequired,
  getNotes: PropTypes.func.isRequired,
};

Notes.displayName = 'Notes';
export const story = Notes;
export default memo(Notes);
