import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { TableCell, Tooltip, Button } from 'components'

const BodyActionsButtons = ({
  row, index, actions
}) => {
  const actionsFiltered = useMemo(
    () => actions.filter(({ isFreeAction }) => !isFreeAction),
    [actions]
  )

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
  )

  return (
    <TableCell className='flex justify-end h-10'>
      {actionsFiltered
        .map(({
          icon: Icon, tooltip, onClick, to, disabled, ...restButton
        }) => (
          <Tooltip
            key={tooltip}
            disabled={_isDisabled(disabled)}
            title={tooltip}
          >
            <Button
              variant='text'
              {...(onClick && { onClick: () => onClick(row, index) })}
              {...(to && { to: to(row, index) })}
              {...restButton}
              size='large'
              className='p-0 mr-3 text-muted-foreground'
            >
              <span>
                <Icon size={20} />
              </span>
            </Button>
          </Tooltip>
        ))}
    </TableCell>
  )
}

BodyActionsButtons.propTypes = {
  actions: PropTypes.array.isRequired,
  row: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

BodyActionsButtons.displayName = 'BodyActionsButtons'
export const story = BodyActionsButtons
export default BodyActionsButtons
