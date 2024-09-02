import {
  PieChart,
  ShoppingCart,
  Users,
  Building2,
  BookOpen,
  Euro,
  FileText,
  Pencil,
  FileCheck,
  Clock,
  AlertTriangle,
  ArrowLeftRight
} from 'lucide-react'

const year = new Date().getFullYear()

export const navConfig = [
  {
    subheader: 'Administración',
    items: [
      {
        title: 'Provedores',
        icon: Users,
        href: '/app/proveedores'
      },
      {
        title: 'Gastos',
        icon: Building2,
        href: '/app/gastos'
      },
      {
        title: 'Libro',
        icon: BookOpen,
        href: `/app/libro/${year}`
      },
      {
        title: 'Pagos',
        icon: Euro,
        href: '/app/pagos'
      },
      {
        title: 'Clientes',
        icon: Users,
        href: '/app/clientes',
        items: [
          {
            title: 'Listado',
            icon: Users,
            href: '/app/clientes/listado'
          },
          {
            title: 'Libro',
            icon: BookOpen,
            href: `/app/clientes/libro/${year}`
          },
          {
            title: 'Facturación',
            icon: FileText,
            href: `/app/clientes/facturacion/${year}`
          },
          {
            title: 'Productos',
            icon: ShoppingCart,
            href: '/app/clientes/productos'
          }
        ]
      },
      {
        title: 'Notas',
        icon: Pencil,
        href: `/app/notas/${year}`
      }
    ]
  },
  {
    subheader: 'Informes',
    items: [
      {
        title: 'Inicio',
        icon: PieChart,
        href: '/app/informes/inicio'
      },
      {
        title: 'Productos',
        icon: ShoppingCart,
        href: '/app/informes/productos'
      },
      {
        title: 'Facturación',
        icon: FileText,
        href: `/app/informes/facturacion/${year}`
      },
      {
        title: 'Albaranes',
        icon: FileCheck,
        href: `/app/informes/albaranes/${year}`
      },
      {
        title: 'Pagarés',
        icon: Clock,
        href: `/app/informes/pagares/${year}`
      },
      {
        title: 'Errores',
        icon: AlertTriangle,
        href: '/app/informes/errores-precios'
      }
    ]
  },
  {
    subheader: 'Operaciones',
    items: [
      {
        title: 'Intercambio',
        icon: ArrowLeftRight,
        href: '/app/intercambio'
      }
    ]
  }
]
