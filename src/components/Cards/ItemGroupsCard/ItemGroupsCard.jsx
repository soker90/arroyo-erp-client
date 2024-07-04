/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types'
import uniqId from 'uniqid'

import { Grid, ItemCard } from 'components'
import { cn, sliceToGroups } from 'utils'

const ItemGroupsCard = ({ groups = 2, items }) => {
  const size = 12 / groups

  /**
   * Render a single data label with value
   * @param {String} label
   * @param {any} value
   * @param {string} label
   * @param {string} variant
   * @returns {ItemCard}
   * @private
   */
  const _renderItem = ({ label, value, variant }) => (
    <ItemCard key={uniqId()} label={label} value={value} variant={variant} />
  )

  _renderItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any,
    variant: PropTypes.string
  }

  /**
   * Render group of data label
   * @param {Array} group
   * @param {Number} idx
   * @returns {Grid}
   * @private
   */
  const _renderGroup = (group, idx) => (
    <Grid item xs={12} md={size} key={uniqId()}>
      <div className={cn(idx === 0 ? 'flex flex-col ml-4' : 'flex flex-col')}>
        {group.map(_renderItem)}
      </div>
    </Grid>
  )

  return (
    <Grid className='w-full pb-6'>
      {sliceToGroups(items, groups)
        .map(_renderGroup)}
    </Grid>
  )
}

ItemGroupsCard.propTypes = {
  groups: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any
  })).isRequired
}

ItemGroupsCard.displayName = 'ItemGroupsCard'

export const story = ItemGroupsCard
export default ItemGroupsCard
