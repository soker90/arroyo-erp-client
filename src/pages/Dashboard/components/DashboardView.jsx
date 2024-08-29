import {
  useCallback, useState
} from 'react'

import { Header, Page, TotalsReportBoxes, Container, Grid } from 'components'
import Reminders from './Reminders'
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal'
import { useDashboard } from '../hooks'

const DashboardView = () => {
  const { cash, reminders, createReminder, deleteReminder } = useDashboard()
  const [deleteId, setDeleteId] = useState(null)

  const _closeModal = useCallback(() => {
    setDeleteId(null)
  }, [setDeleteId])
  return (
    <>
      <Page
        className='min-h-full py-6'
        title='Inicio'
      >
        <Container>
          <Header title='Panel' description='Efectivo y recordatorios' />

          <TotalsReportBoxes totals={cash} className='mt-0 mb-4' />
          <Grid
            container
            spacing={3}
          >
            <Reminders
              reminders={reminders}
              createReminder={createReminder}
              setDeleteId={setDeleteId}
            />
          </Grid>
        </Container>
      </Page>
      <DeleteConfirmationModal id={deleteId} close={_closeModal} deleteReminder={deleteReminder} />
    </>
  )
}

export default DashboardView
