import React, { memo } from 'react';
import PropTypes from 'prop-types';
import VerticalAlignCenterIcon from '@material-ui/icons/VerticalAlignCenter';

import { Header } from 'components';

const HeaderPayments = () => (
  <Header
    title='Pagos'
    buttons={[
      {
        Icon: VerticalAlignCenterIcon,
        label: 'Fusionar',
        onClick: () => {
        },
      },
    ]}
  />
);

HeaderPayments.displayName = 'HeaderPayments';
export const story = HeaderPayments;
export default memo(HeaderPayments);
