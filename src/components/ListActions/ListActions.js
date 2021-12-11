import { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Tooltip,
  Typography,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import makeStyles from '@mui/styles/makeStyles';

import { InputForm } from '../Forms';

const useStyles = makeStyles(theme => ({
  root: {},
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  listItem: {
    cursor: 'pointer',
  },
  input: {
    padding: theme.spacing(2),
  },
}));

const ListActions = ({
  className,
  data,
  icon,
  title,
  onClick,
  ...rest
}) => {
  const classes = useStyles();
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(null);
  }, [data]);

  const _handleClick = item => {
    setSelected(item._id);
    onClick(item);
  };

  const _handleChangeFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const _filterList = useMemo(() => (
    filter
      ? data.filter(({ name }) => name.toLowerCase()
        .includes(filter.toLowerCase()))
      : data
  ), [filter, data]);

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
        <InputForm
          value={filter}
          onChange={_handleChangeFilter}
          size={12}
          placeholder='Filtrar...'
          className={classes.input}
        />
        {_filterList.map((item, i) => (
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
                  edge='end'
                  size='small'
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
};

ListActions.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  icon: PropTypes.node,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ListActions;
