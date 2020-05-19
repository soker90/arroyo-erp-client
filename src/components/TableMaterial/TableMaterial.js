/* eslint-disable max-len */
import React, {memo, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@material-ui/core';
import uniqId from 'uniqid';
import {useStyles} from './TableMaterial.styles';

const TableMaterial = ({className, columns, actions, data, title, refresh, count, onRowClick, ...rest}) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
    refresh({
      offset: newPage,
      limit,
    });
  };

  const handleLimitChange = event => {
    setLimit(event.target.value);
    refresh({
      offset: page,
      limit,
    });
  };

  const _labelOfRows = ({from, to, count}) =>
    `${from}-${
      to === -1 ? count : to
    } de ${
      count !== -1 ?
        count :
        `más de ${to}`
    }`;

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      {title &&
      <Box p={2}>
        <Box
          display="flex"
          alignItems="center"
        >
          <Typography
            variant="h4"
            color="textPrimary"
          >
            {title}
          </Typography>
        </Box>
      </Box>
      }
      <PerfectScrollbar>
        <Box>
          <Table>
            <TableHead styles={{fontSize: 20}}>
              <TableRow>
                {columns.map(({title}, idCol) =>
                  <TableCell key={idCol}>
                    {title}
                  </TableCell>,
                )}
                {actions &&
                <TableCell align="right">
                  Acciones
                </TableCell>
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(row =>
                <TableRow
                  onMouseDown={() => onRowClick?.(row)}
                  hover
                  key={uniqId()}
                >
                  {columns.map(({field, render}) =>
                    <TableCell key={uniqId()}>
                      {render?.(row) || row[field]}
                    </TableCell>,
                  )}
                </TableRow>,
              )}
            </TableBody>
          </Table>
          {
            data.length === 0 &&
            <Box p={2}>
              <Typography
                variant="body1"
                color="textPrimary"
                align='center'
              >
                No se han encontrado datos
              </Typography>
            </Box>
          }
        </Box>
      </PerfectScrollbar>
      {!!count &&
      <TablePagination
        component="div"
        count={count}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
        labelRowsPerPage={'filas'}
        backIconButtonText='Anterior'
        labelDisplayedRows={_labelOfRows}
        nextIconButtonText='Siguiente'
      />
      }
    </Card>
  );
};

TableMaterial.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.array.isRequired,
  actions: PropTypes.array,
  data: PropTypes.array,
  title: PropTypes.string,
  refresh: PropTypes.func,
  count: PropTypes.number,
  onRowClick: PropTypes.func,
};

TableMaterial.defaultProps = {
  data: [],
  count: 0,
};

export const story = TableMaterial;
export default memo(TableMaterial);
