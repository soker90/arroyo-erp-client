import React, {memo} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Breadcrumbs, Button, Grid, Link, SvgIcon, Typography} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import uniqId from 'uniqid';

import {useStyles} from './Header.styles';

const Header = ({className, routes, title, description, buttons, ...rest}) => {
  const classes = useStyles();

  /**
   * Renderiza un elemento de la cabecera de navegación
   * @param {String} link
   * @param {String} title
   * @return {Link}
   * @private
   */
  const _itemNav = (link, title) =>
    <Link
      key={uniqId()}
      variant="body1"
      color="inherit"
      to={link}
      component={RouterLink}
    >
      {title}
    </Link>;

  /**
   * Render button in header
   * @param {String} color
   * @param {String} variant
   * @param {Boolean} disableSvg
   * @param {Comment} Icon
   * @param {Function} onClick
   * @param {String} label
   * @return {Button}
   * @private
   */
  const _renderButton = ({
    color, variant, disableSvg, Icon, onClick, label,
  }) => (
    <Button
      key={uniqId()}
      color={color || 'secondary'}
      variant={variant || 'contained'}
      className={classes.action}
      onClick={onClick}
    >
      {disableSvg ?
        <Icon/> :
        <SvgIcon
          fontSize="small"
          className={classes.actionIcon}
        >
          <Icon/>
        </SvgIcon>
      }
      {label}
    </Button>);

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
            routes.map(({link, title}) => _itemNav(link, title))
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
      {
        buttons &&
        <Grid item>
          {buttons.map(_renderButton)}
        </Grid>
      }
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
  buttons: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    variant: PropTypes.string,
    disableSvg: PropTypes.bool,
    Icon: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
  })),
};

Header.defaultProps = {
  routes: [],
};

export default memo(Header);
