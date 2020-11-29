import { PieChart as PieChartIcon, ShoppingCart, Users as UsersIcon } from 'react-feather';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EuroIcon from '@material-ui/icons/Euro';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import DescriptionIcon from '@material-ui/icons/Description';

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
        href: `/app/informes/facturacion/${new Date().getFullYear()}`,
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
            href: '/app/clientes',
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
        href: `/app/libro/${new Date().getFullYear()}`,
      },
      {
        title: 'Pagos',
        icon: EuroIcon,
        href: '/app/pagos',
      },
    ],
  },
  {
    items: [
      {
        title: 'Notas',
        icon: PostAddIcon,
        href: '/app/notas',
      },
    ],
  },
];
