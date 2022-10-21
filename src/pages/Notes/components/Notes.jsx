import { useEffect } from 'react'
import { Container } from '@mui/material'
import PropTypes from 'prop-types'

import { Page } from 'components'
import { useParams } from 'react-router'
import Header from './Header'
import NotesTable from './NotesTable'
import { useStyles } from './Notes.styles'

const Notes = ({ notes, getNotes }) => {
  const { year } = useParams()
  const classes = useStyles()

  useEffect(() => {
    getNotes(year)
  }, [getNotes, year])

  return (
    <Page className={classes.root} title='Notas'>
      <Container maxWidth={false}>
        <Header year={year} />

        <NotesTable notes={notes} />
      </Container>
    </Page>
  )
}
Notes.propTypes = {
  notes: PropTypes.array.isRequired,
  getNotes: PropTypes.func.isRequired
}

Notes.displayName = 'Notes'
export const story = Notes
export default Notes
