import React, { memo } from 'react';
import PropTypes from 'prop-types';
import VerticalAlignCenterIcon from '@material-ui/icons/VerticalAlignCenter';

import { Header } from 'components';
import { NavLink } from 'react-router-dom';

const HeaderPayments = () => (
  <Header
    title='Pagos'
    buttons={[
      {
        component: NavLink,
        to: '/app/libro/2020',
        Icon: VerticalAlignCenterIcon,
        label: 'Fusionar',
      },
    ]}
  />
);

HeaderPayments.displayName = 'HeaderPayments';
export const story = HeaderPayments;
export default memo(HeaderPayments);
