import { PieChart as PieChartIcon, Users as UsersIcon } from 'react-feather';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EuroIcon from '@material-ui/icons/Euro';

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
      {
        title: 'Pagos',
        icon: EuroIcon,
        href: '/app/pagos',
      },
    ],
  },
];
