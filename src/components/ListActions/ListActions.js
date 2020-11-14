import { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  ListSubheader,
  ListItemSecondaryAction,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(theme => ({
  root: {},
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  listItem: {
    cursor: 'pointer',
  },
}));

function ListActions({
  className, data, icon, title, onClick, ...rest
}) {
  const classes = useStyles();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(null);
  }, [data]);

  const _handleClick = item => {
    setSelected(item._id);
    onClick(item);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <List
        subheader={(
          <ListSubheader component='div' id='nested-list-subheader'>
            {title}
          </ListSubheader>
        )}
      >
        {data.map((item, i) => (
          <ListItem
            divider={i < data.length - 1}
            key={item._id}
            onClick={() => _handleClick(item)}
            className={classes.listItem}
          >
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant='body2'
                color={selected === item._id ? 'secondary' : 'textSecondary'}
              >
                <span className={classes.fontWeightMedium}>
                  {item.name}
                </span>
              </Typography>
            </ListItemText>
            <ListItemSecondaryAction>
              <Tooltip title=' View'>
                <IconButton
                  edge=' end'
                  size=' small'
                  onClick={() => _handleClick(item)}
                >
                  <NavigateNextIcon />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

ListActions.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  icon: PropTypes.node,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ListActions;
