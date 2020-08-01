/* eslint-disable max-len */
import React, { memo, useMemo, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TablePagination,
} from '@material-ui/core';

import NoData from './components/NoData';
import HeadTable from './components/HeadTable';
import BodyTable from './components/BodyTable';
import TitleTable from './components/TitleTable';
import { labelOfRows } from './utils';
import { useStyles } from './TableMaterial.styles';

const TableMaterial = ({
  className, columns, actions, data, title, refresh, count, onRowClick, withCard, href, multiSelect, onSelected, ...rest
}) => {
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

  const Wrapper = useMemo(() => (withCard ? Card : 'div'), [withCard]);

  return (
    <Wrapper
      className={clsx(classes.root, className)}
      {...rest}
    >
      <TitleTable title={title} />
      <PerfectScrollbar>
        <Box>
          <Table>
            <HeadTable actions={actions} columns={columns} multiSelect={multiSelect} />
            <BodyTable
              columns={columns}
              actions={actions}
              classes={classes}
              data={data}
              href={href}
              onRowClick={onRowClick}
              multiSelect={multiSelect}
              onSelected={onSelected}
            />
          </Table>

          <NoData elements={data.length} />
        </Box>
      </PerfectScrollbar>
      {!!count
      && (
        <TablePagination
          component='div'
          count={count}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
          labelRowsPerPage='filas'
          backIconButtonText='Anterior'
          labelDisplayedRows={labelOfRows}
          nextIconButtonText='Siguiente'
        />
      )}
    </Wrapper>
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
  withCard: PropTypes.bool,
  href: PropTypes.func,
  multiSelect: PropTypes.func,
  onSelected: PropTypes.func,
};

TableMaterial.defaultProps = {
  data: [],
  count: 0,
  withCard: true,
};

export const story = TableMaterial;
export default memo(TableMaterial);
