/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import uniqId from 'uniqid';

import { Grid, List } from '@material-ui/core';
import { ItemCard } from 'components/Cards';
import { sliceToGroups } from 'utils';
import { useStyles } from 'components/Cards/ItemGroupsCard/ItemGroupsCard.styles';

const ItemGroupsCard = ({ groups, items }) => {
  const classes = useStyles();
  const size = 12 / groups;

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
  );

  _renderItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any,
    variant: PropTypes.string,
  };

  /**
   * Render group of data label
   * @param {Array} group
   * @param {Number} idx
   * @returns {Grid}
   * @private
   */
  const _renderGroup = (group, idx) => (
    <Grid item xs={12} md={size} key={uniqId()}>
      <List className={idx === 0 ? classes.listFirst : classes.list}>
        {group.map(_renderItem)}
      </List>
    </Grid>
  );

  return (
    <Grid
      container
      spacing={3}
      className={classes.grid}
    >
      {sliceToGroups(items, groups)
        .map(_renderGroup)}
    </Grid>
  );
};

ItemGroupsCard.propTypes = {
  groups: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any,
  })).isRequired,
};

ItemGroupsCard.defaultProps = {
  groups: 2,
};

ItemGroupsCard.displayName = 'ItemGroupsCard';

export const story = ItemGroupsCard;
export default ItemGroupsCard;
