/* eslint-disable react/prop-types */
import { memo } from 'react';
import PropTypes from 'prop-types';

import { TableMaterial, TextEuro } from 'components';
import { useStyles } from './BillingTable.styles';

const BillingTable = ({ billing }) => {
  const classes = useStyles();
  return (
    <TableMaterial
      className={classes.table}
      columns={[
        {
          title: 'Proveedor',
          field: 'name',
        },
        {
          title: 'Razón social',
          field: 'businessName',
        },
        {
          title: 'Trimestre 1',
          render: ({ trimester1 }) => <TextEuro num={trimester1} />,
        },
        {
          title: 'Trimestre 2',
          render: ({ trimester2 }) => <TextEuro num={trimester2} />,
        },
        {
          title: 'Trimestre 3',
          render: ({ trimester3 }) => <TextEuro num={trimester3} />,
        },
        {
          title: 'Trimestre 4',
          render: ({ trimester4 }) => <TextEuro num={trimester4} />,
        },
        {
          title: 'Anual',
          render: ({ annual }) => <TextEuro num={annual} />,
        },
      ]}
      data={billing}
    />
  );
};

BillingTable.propTypes = {
  billing: PropTypes.array.isRequired,
};

BillingTable.displayName = 'BillingTable';

export default memo(BillingTable);
