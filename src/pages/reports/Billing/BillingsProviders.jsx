import { Billing } from 'components'
import { useParams } from 'react-router'
import { useBillings } from 'hooks'

const BillingsProviders = () => {
  const { year } = useParams()
  const { billings } = useBillings(year)
  return (
    <Billing billing={billings} year={year} />
  )
}

export default BillingsProviders
