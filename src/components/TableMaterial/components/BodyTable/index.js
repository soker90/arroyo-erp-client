import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Box, IconButton, TableBody, TableCell, TableRow, Tooltip,
} from '@material-ui/core';
import uniqId from 'uniqid';
import { Link } from 'react-router-dom';

const BodyTable = ({
  data, onRowClick, columns, href, classes, actions,
}) => {
  /**
   * Render actions buttons
   */
  const _renderActionsButtons = (row, index) => actions && (
    <TableCell align='right'>
      {actions?.filter(({ isFreeAction }) => !isFreeAction)
        .map(({
          icon: Icon, tooltip, onClick, to, ...restButton
        }) => (
          <Tooltip key={uniqId()} title={tooltip} className={classes.tooltip}>
            <IconButton
              {...(onClick && { onClick: () => onClick(row, index) })}
              {...(to && { to: to(row, index) })}
              {...restButton}
            >
              <Icon className={classes.actionIcon} />
            </IconButton>
          </Tooltip>
        ))}
    </TableCell>
  );

  return (
    <TableBody>
      {data.map((row, index) => (
        <TableRow
          onMouseDown={() => onRowClick?.(row)}
          hover
          key={uniqId()}
        >
          {columns.map(({ field, render }) => (
            <TableCell key={uniqId()}>
              <Box
                {...(href && {
                  component: Link,
                  to: href(row),
                  className: classes.cell,
                })}
              >
                {render?.(row) || row[field]}
              </Box>
            </TableCell>
          ))}
          {_renderActionsButtons(row, index)}
        </TableRow>
      ))}
    </TableBody>
  );
};

BodyTable.propTypes = {
  data: PropTypes.array.isRequired,
  onRowClick: PropTypes.func,
  columns: PropTypes.array.isRequired,
  href: PropTypes.func,
  classes: PropTypes.object,
  actions: PropTypes.array,
};

BodyTable.displayName = 'BodyTable';
export const story = BodyTable;
export default memo(BodyTable);
