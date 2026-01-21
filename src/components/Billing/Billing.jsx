/* global localStorage */
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

import { Page, Container } from 'components'
import BillingTable from './BillingTable'
import Header from './Header'
import RecalcChangesAlert from './RecalcChangesAlert/RecalcChangesAlert'

const STORAGE_KEY = 'billing_recalc_changes'

const Billing = ({
  billing,
  type,
  year
}) => {
  const [changesData, setChangesData] = useState(null)

  useEffect(() => {
    const loadChanges = () => {
      const stored = localStorage.getItem(`${STORAGE_KEY}_${year}`)
      if (stored) {
        setChangesData(JSON.parse(stored))
      } else {
        setChangesData(null)
      }
    }

    loadChanges()

    // Listener para detectar cambios en localStorage desde otros componentes
    const handleStorageChange = (e) => {
      if (e.key === `${STORAGE_KEY}_${year}`) {
        loadChanges()
      }
    }

    window.addEventListener('storage', handleStorageChange)

    // Custom event para cambios en la misma pestaña
    window.addEventListener('billingRecalcUpdate', loadChanges)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('billingRecalcUpdate', loadChanges)
    }
  }, [year])

  const handleDismissChanges = () => {
    localStorage.removeItem(`${STORAGE_KEY}_${year}`)
    setChangesData(null)
  }

  return (
    <Page className='py-6' title={`Facturación ${type || ''} ${year}`}>
      <Container>
        <Header year={Number(year)} type={type} />

        <RecalcChangesAlert
          year={Number(year)}
          changesData={changesData}
          onDismiss={handleDismissChanges}
        />

        <BillingTable billing={billing} type={type} />
      </Container>
    </Page>
  )
}
Billing.propTypes = {
  billing: PropTypes.array.isRequired,
  type: PropTypes.string,
  year: PropTypes.string
}

export default Billing
