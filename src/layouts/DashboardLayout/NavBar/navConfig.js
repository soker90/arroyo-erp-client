import { PieChart as PieChartIcon, Users as UsersIcon } from 'react-feather';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EuroIcon from '@material-ui/icons/Euro';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

export const navConfig = [
  {
    items: [
      {
        title: 'Inicio',
        icon: PieChartIcon,
        href: '/app/informes/inicio',
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
