import { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useParams, useLocation } from 'react-router'

import { TYPE_PROVIDER } from 'constants/providers'
import { LoadingScreen } from 'components'

const Provider = ({
  provider,
  getProvider
}) => {
  const { idProvider } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const routesByType = useMemo(() => ({
    [TYPE_PROVIDER.GENERAL]: '/app/proveedores/general',
    [TYPE_PROVIDER.EXPENSES]: '/app/gastos',
    undefined: '/app/proveedores/general'
  }), [])

  useEffect(() => {
    if (idProvider) getProvider(idProvider)
  }, [idProvider])

  useEffect(() => {
    const composeRoute = `${routesByType[provider.type]}/${idProvider}${location.hash || ''}`
    if (provider._id === idProvider) navigate(composeRoute, { replace: true })
  }, [provider])

  return <LoadingScreen />
}

Provider.propTypes = {
  provider: PropTypes.object.isRequired,
  getProvider: PropTypes.func.isRequired
}

Provider.displayName = 'Provider'

export const story = Provider
export default Provider
