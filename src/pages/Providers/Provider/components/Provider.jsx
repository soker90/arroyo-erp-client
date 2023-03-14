import { useEffect, useMemo } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router'

import { TYPE_PROVIDER } from 'constants/providers'
import { LoadingScreen } from 'components'
import { useProvider } from 'hooks'

const Provider = () => {
  const { idProvider } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { provider } = useProvider(idProvider)

  const routesByType = useMemo(() => ({
    [TYPE_PROVIDER.GENERAL]: '/app/proveedores/general',
    [TYPE_PROVIDER.EXPENSES]: '/app/gastos',
    undefined: '/app/proveedores/general'
  }), [])

  useEffect(() => {
    const composeRoute = `${routesByType[provider.type]}/${idProvider}${location.hash || ''}`
    if (provider._id === idProvider) navigate(composeRoute, { replace: true })
  }, [provider])

  return <LoadingScreen />
}

export const story = Provider
export default Provider
