import { Billing } from 'components'
import { useParams } from 'react-router'
import { useClientsBillings } from './hooks'

const BillingsProviders = () => {
  const { year } = useParams()
  const { billings } = useClientsBillings(year)
  return (
    <Billing billing={billings} year={year} type='clientes' />
  )
}

export default BillingsProviders
