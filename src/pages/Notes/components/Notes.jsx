import { useParams } from 'react-router'

import { Page, Container } from 'components'
import Header from './Header'
import NotesTable from './NotesTable'
import { useNotes } from '../hooks'

const Notes = () => {
  const { year } = useParams()

  const { notes, createNote, editNote, deleteNote } = useNotes(year)

  return (
    <Page className='min-h-full py-6 ' title='Notas'>
      <Container>
        <Header year={year} createNote={createNote} />

        <NotesTable notes={notes} editNote={editNote} deleteNote={deleteNote} />
      </Container>
    </Page>
  )
}
export default Notes
