import { useEffect } from 'react'
import { Container } from '@mui/material'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'

import { Page } from 'components'
import Header from './Header'
import NotesTable from './NotesTable'
import { useStyles } from './Notes.styles'
import { useNotes } from '../hooks'

const Notes = () => {
  const { year } = useParams()
  const classes = useStyles()

  const { notes, createNote } = useNotes(year)

  return (
    <Page className={classes.root} title='Notas'>
      <Container maxWidth={false}>
        <Header year={year} createNote={createNote} />

        <NotesTable notes={notes} />
      </Container>
    </Page>
  )
}
export default Notes
