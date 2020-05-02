import React, {memo} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Breadcrumbs, Grid, Link, Typography} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {useStyles} from './Header.styles';

const Header = ({className, routes, title, description, ...rest}) => {
  const classes = useStyles();

  const _itemNav = (link, title, idx) =>
    <Link
      key={idx || 'none'}
      variant="body1"
      color="inherit"
      to={link}
      component={RouterLink}
    >
      {title}
    </Link>;

  return (
    <Grid
      container
      spacing={3}
      justify="space-between"
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small"/>}
          aria-label="breadcrumb"
        >
          {_itemNav('/app', 'Inicio')}
          {
            routes.map(({link, title}, idx) => _itemNav(link, title, idx))
          }
          <Typography
            variant="body1"
            color="textPrimary"
          >
            {title}
          </Typography>
        </Breadcrumbs>
        <Typography
          variant="h3"
          color="textPrimary"
        >
          {description || title}
        </Typography>
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Header.defaultProps = {
  routes: [],
};

export default memo(Header);
