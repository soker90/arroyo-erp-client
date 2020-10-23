import { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { IconButton, TableCell, Tooltip } from '@material-ui/core';
import uniqId from 'uniqid';

import { useStyles } from './styles';

const BodyActionsButtons = ({
  row, index, actions,
}) => {
  const classes = useStyles();

  const actionsFiltered = useMemo(
    () => actions.filter(({ isFreeAction }) => !isFreeAction),
    [actions],
  );

  /**
   * Return if button is disabled
   * @param disabled
   * @returns {boolean|function|undefined}
   * @private
   */
  const _isDisabled = disabled => (
    typeof disabled === 'function'
      ? disabled(row)
      : disabled
  );

  return (
    <TableCell align='right'>
      {actionsFiltered
        .map(({
          icon: Icon, tooltip, onClick, to, disabled, ...restButton
        }) => (
          <Tooltip
            key={uniqId()}
            title={tooltip}
            className={classes.tooltip}
            disabled={_isDisabled(disabled)}
            component='span'
          >
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
};

BodyActionsButtons.propTypes = {
  actions: PropTypes.array.isRequired,
  row: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

BodyActionsButtons.displayName = 'BodyActionsButtons';
export const story = BodyActionsButtons;
export default memo(BodyActionsButtons);
