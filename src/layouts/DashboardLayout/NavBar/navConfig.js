import { PieChart as PieChartIcon, ShoppingCart, Users as UsersIcon } from 'react-feather';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EuroIcon from '@material-ui/icons/Euro';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import DescriptionIcon from '@material-ui/icons/Description';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ReceiptIcon from '@material-ui/icons/Receipt';

const year = new Date().getFullYear();

export const navConfig = [
  {
    subheader: 'Informes',
    items: [
      {
        title: 'Inicio',
        icon: PieChartIcon,
        href: '/app/informes/inicio',
      },
      {
        title: 'Productos',
        icon: ShoppingCart,
        href: '/app/informes/productos',
      },
      {
        title: 'Facturación',
        icon: DescriptionIcon,
        href: `/app/informes/facturacion/${year}`,
      },
      {
        title: 'Albaranes',
        icon: ReceiptIcon,
        href: `/app/informes/albaranes/${year}`,
      },
    ],
  },
  {
    subheader: 'Administración',
    items: [
      {
        title: 'Provedores',
        icon: UsersIcon,
        href: '/app/proveedores',
      },
      {
        title: 'Clientes',
        icon: UsersIcon,
        href: '/app/clientes',
        items: [
          {
            title: 'Listado',
            icon: UsersIcon,
            href: '/app/clientes/listado',
          },
          {
            title: 'Libro',
            icon: MenuBookIcon,
            href: `/app/clientes/libro/${year}`,
          },
          {
            title: 'Productos',
            icon: ShoppingCart,
            href: '/app/clientes/productos',
          },
        ],
      },
      {
        title: 'Gastos',
        icon: AccountBalanceIcon,
        href: '/app/gastos',
      },
      {
        title: 'Libro',
        icon: MenuBookIcon,
        href: `/app/libro/${year}`,
      },
      {
        title: 'Pagos',
        icon: EuroIcon,
        href: '/app/pagos',
      },
      {
        title: 'Notas',
        icon: PostAddIcon,
        href: '/app/notas',
      },
    ],
  },
  {
    subheader: 'Operaciones',
    items: [
      {
        title: 'Intercambio',
        icon: SwapHorizIcon,
        href: '/app/intercambio',
      },
    ],
  },
];
