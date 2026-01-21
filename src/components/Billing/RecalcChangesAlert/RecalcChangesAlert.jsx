import PropTypes from 'prop-types'
import { Eye, X, CheckCircle } from 'lucide-react'
import Button from 'components/ui/Button'

const RecalcChangesAlert = ({ year, changesData, onDismiss }) => {
  if (!changesData || !changesData.changes || changesData.changes.length === 0) {
    return null
  }

  const totalInvoices = changesData.changes.reduce((sum, provider) => sum + provider.invoices.length, 0)

  return (
    <div className="my-6 bg-green-600 text-white p-4 rounded-md shadow-lg flex items-center justify-between">
      <span className="flex items-center flex-1">
        <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
        <span>
          <span className="font-semibold">Facturación recalculada:</span>
          {' '}
          Se han encontrado y corregido {totalInvoices} {totalInvoices === 1 ? 'factura' : 'facturas'} en {changesData.updated} {changesData.updated === 1 ? 'proveedor' : 'proveedores'}
        </span>
      </span>
      <div className="flex gap-2 ml-4 flex-shrink-0">
        <Button
          to={`/app/informes/facturacion/${year}/recalc-changes`}
          variant="contained"
          size="sm"
          className="bg-white text-green-600 hover:bg-green-50"
        >
          <Eye className="mr-1" size={16} />
          Detalle
        </Button>
        <Button
          onClick={onDismiss}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-green-700"
        >
          <X size={20} />
        </Button>
      </div>
    </div>
  )
}

RecalcChangesAlert.propTypes = {
  year: PropTypes.number.isRequired,
  changesData: PropTypes.shape({
    year: PropTypes.number,
    timestamp: PropTypes.number,
    updated: PropTypes.number,
    changes: PropTypes.arrayOf(PropTypes.shape({
      providerId: PropTypes.string,
      providerName: PropTypes.string,
      invoices: PropTypes.array,
      trimesters: PropTypes.array
    }))
  }),
  onDismiss: PropTypes.func.isRequired
}

export default RecalcChangesAlert
