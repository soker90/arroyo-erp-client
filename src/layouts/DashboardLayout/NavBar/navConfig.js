import { PieChart as PieChartIcon, Users as UsersIcon } from 'react-feather';
import MenuBookIcon from '@material-ui/icons/MenuBook';

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
        title: 'Libro',
        icon: MenuBookIcon,
        href: `/app/libro/${new Date().getFullYear()}`,
      },
    ],
  },
];
