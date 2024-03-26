import {
  useCallback, useState
} from 'react'
import { Grid } from '@mui/material'

import { Header, Page, TotalsReportBoxes, Container } from 'components'
import { useStyles } from './DashboardView.styles'
import Reminders from './Reminders'
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal'
import { useDashboard } from '../hooks'

const DashboardView = () => {
  const { cash, reminders, createReminder, deleteReminder } = useDashboard()
  const classes = useStyles()
  const [deleteId, setDeleteId] = useState(null)

  const _closeModal = useCallback(() => {
    setDeleteId(null)
  }, [setDeleteId])
  return (
    <>
      <Page
        className={classes.root}
        title='Inicio'
      >
        <Container>
          <Header title='Panel' description='Efectivo y recordatorios' />

          <TotalsReportBoxes totals={cash} className={classes.cashBoxes} />
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
