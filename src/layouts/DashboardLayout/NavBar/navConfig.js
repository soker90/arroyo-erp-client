import React from 'react';
import {PieChart as PieChartIcon, Users as UsersIcon} from 'react-feather';

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
        // items: []
      },
    ],
  },
];
