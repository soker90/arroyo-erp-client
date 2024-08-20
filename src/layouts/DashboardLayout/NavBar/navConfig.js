import { PieChart as PieChartIcon, ShoppingCart, Users as UsersIcon } from 'lucide-react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import DescriptionIcon from '@mui/icons-material/Description'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import EuroIcon from '@mui/icons-material/Euro'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import PostAddIcon from '@mui/icons-material/PostAdd'
import ReceiptIcon from '@mui/icons-material/Receipt'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import UpdateIcon from '@mui/icons-material/Update'

const year = new Date().getFullYear()

export const navConfig = [
  {
    subheader: 'Administración',
    items: [
      {
        title: 'Provedores',
        icon: UsersIcon,
        href: '/app/proveedores'
      },
      {
        title: 'Gastos',
        icon: AccountBalanceIcon,
        href: '/app/gastos'
      },
      {
        title: 'Libro',
        icon: MenuBookIcon,
        href: `/app/libro/${year}`
      },
      {
        title: 'Pagos',
        icon: EuroIcon,
        href: '/app/pagos'
      },
      {
        title: 'Clientes',
        icon: UsersIcon,
        href: '/app/clientes',
        items: [
          {
            title: 'Listado',
            icon: UsersIcon,
            href: '/app/clientes/listado'
          },
          {
            title: 'Libro',
            icon: MenuBookIcon,
            href: `/app/clientes/libro/${year}`
          },
          {
            title: 'Facturación',
            icon: DescriptionIcon,
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
        icon: PostAddIcon,
        href: `/app/notas/${year}`
      }
    ]
  },
  {
    subheader: 'Informes',
    items: [
      {
        title: 'Inicio',
        icon: PieChartIcon,
        href: '/app/informes/inicio'
      },
      {
        title: 'Productos',
        icon: ShoppingCart,
        href: '/app/informes/productos'
      },
      {
        title: 'Facturación',
        icon: DescriptionIcon,
        href: `/app/informes/facturacion/${year}`
      },
      {
        title: 'Albaranes',
        icon: ReceiptIcon,
        href: `/app/informes/albaranes/${year}`
      },
      {
        title: 'Pagarés',
        icon: UpdateIcon,
        href: `/app/informes/pagares/${year}`
      },
      {
        title: 'Errores',
        icon: ErrorOutlineIcon,
        href: '/app/informes/errores-precios'
      }
    ]
  },
  {
    subheader: 'Operaciones',
    items: [
      {
        title: 'Intercambio',
        icon: SwapHorizIcon,
        href: '/app/intercambio'
      }
    ]
  }
]
