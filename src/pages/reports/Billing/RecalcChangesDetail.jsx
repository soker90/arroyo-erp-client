/* global localStorage */
import { useParams, Link } from 'react-router'
import { ArrowLeft, FileText } from 'lucide-react'
import { Page, Container, Header, TableMaterial, TextEuro } from 'components'
import { Card } from 'components/ui/Card'
import { PATH_INVOICES } from 'constants/paths'
import { format } from 'utils'

const STORAGE_KEY = 'billing_recalc_changes'

const RecalcChangesDetail = () => {
  const { year } = useParams()

  const stored = localStorage.getItem(`${STORAGE_KEY}_${year}`)
  const changesData = stored ? JSON.parse(stored) : null

  if (!changesData || !changesData.changes) {
    return (
      <Page className='py-6' title={`Detalles de recálculo - ${year}`}>
        <Container>
          <Header
            title='Detalles de recálculo'
            description={`No hay cambios registrados para el año ${year}`}
            buttons={[
              {
                to: `/app/informes/facturacion/${year}`,
                Icon: ArrowLeft,
                label: 'Volver',
                variant: 'outline'
              }
            ]}
          />
        </Container>
      </Page>
    )
  }

  return (
    <Page className='py-6' title={`Detalles de recálculo - ${year}`}>
      <Container>
        <Header
          title='Detalles de recálculo'
          description={`Cambios detectados en la facturación del año ${year}`}
          buttons={[
            {
              to: `/app/informes/facturacion/${year}`,
              Icon: ArrowLeft,
              label: 'Volver',
              variant: 'outline'
            }
          ]}
        />

        <div className='space-y-6 mt-6'>
          {/* Cards de resumen */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <Card className='p-6'>
              <div>
                <h3 className='text-muted-foreground font-bold text-xs uppercase tracking-wider'>
                  Proveedores afectados
                </h3>
                <div className='flex items-center flex-wrap mt-2'>
                  <span className='text-3xl font-normal'>
                    {changesData.updated}
                  </span>
                </div>
              </div>
            </Card>

            <Card className='p-6'>
              <div>
                <h3 className='text-muted-foreground font-bold text-xs uppercase tracking-wider'>
                  Facturas corregidas
                </h3>
                <div className='flex items-center flex-wrap mt-2'>
                  <span className='text-3xl font-normal'>
                    {changesData.changes.reduce((sum, p) => sum + p.invoices.length, 0)}
                  </span>
                </div>
              </div>
            </Card>

            <Card className='p-6'>
              <div>
                <h3 className='text-muted-foreground font-bold text-xs uppercase tracking-wider'>
                  Fecha del recálculo
                </h3>
                <div className='flex items-center flex-wrap mt-2'>
                  <span className='text-lg font-normal'>
                    {new Date(changesData.timestamp).toLocaleString('es-ES', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Tabla de cambios por proveedor */}
          {changesData.changes.map((provider, index) => (
            <Card key={provider.providerId || index} className='p-6'>
              <h3 className='text-xl font-semibold mb-1'>{provider.providerName}</h3>
              <p className='text-sm text-muted-foreground mb-4'>
                Trimestres afectados: {provider.trimesters.map(t => `T${t}`).join(', ')}
              </p>
              <TableMaterial
                columns={[
                  {
                    title: 'Nº Factura',
                    field: 'nInvoice',
                    render: ({ nInvoice, invoiceId }) => nInvoice || invoiceId
                  },
                  {
                    title: 'Trimestre',
                    render: ({ trimester }) => (
                      <span className='inline-flex items-center px-2 py-1 text-xs font-semibold rounded bg-primary/10 text-primary'>
                        T{trimester}
                      </span>
                    )
                  },
                  {
                    title: 'Total Anterior',
                    render: ({ oldTotal }) => <TextEuro num={oldTotal} />
                  },
                  {
                    title: 'Total Correcto',
                    render: ({ newTotal }) => <TextEuro num={newTotal} className='font-semibold' />
                  },
                  {
                    title: 'Diferencia',
                    render: ({ oldTotal, newTotal }) => {
                      const diff = newTotal - oldTotal
                      return (
                        <span className={`font-medium ${diff > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {diff > 0 ? '+' : ''}{format.euro(diff)}
                        </span>
                      )
                    }
                  }
                ]}
                data={provider.invoices}
                actions={[
                  {
                    icon: FileText,
                    tooltip: 'Ver factura',
                    component: Link,
                    to: ({ invoiceId }) => `${PATH_INVOICES}/${invoiceId}`
                  }
                ]}
                withCard={false}
              />
            </Card>
          ))}
        </div>
      </Container>
    </Page>
  )
}

export default RecalcChangesDetail
