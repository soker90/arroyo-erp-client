/* eslint-disable react/prop-types, no-shadow */
import { memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Breadcrumbs, Button, Grid, Link, SvgIcon, Typography, Box,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import uniqId from 'uniqid';

import { useStyles } from './Header.styles';

const Header = ({
  className, routes, title, description, buttons, buttonsSecondary, ...rest
}) => {
  const classes = useStyles();

  /**
   * Renderiza un elemento de la cabecera de navegación
   * @param {String} link
   * @param {String} title
   * @return {Link}
   * @private
   */
  const _itemNav = (link, title) => (
    <Link
      key={uniqId()}
      variant='body1'
      color='inherit'
      to={link}
      component={RouterLink}
      underline='hover'
    >
      {title}
    </Link>
  );

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
    color, variant, disableSvg, Icon, label, ...rest
  }) => (
    <Button
      key={uniqId()}
      color={color || 'secondary'}
      variant={variant || 'contained'}
      className={classes.action}
      {...rest}
    >
      {disableSvg
        ? <Icon className={classes.actionIcon} />
        : (
          <SvgIcon
            fontSize='small'
            className={classes.actionIcon}
          >
            <Icon />
          </SvgIcon>
        )}
      {label}
    </Button>
  );

  return (
    <Grid
      container
      spacing={3}
      justifyContent='space-between'
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize='small' />}
          aria-label='breadcrumb'
        >
          {_itemNav('/app', 'Inicio')}
          {
            routes.map(({ link, title }) => _itemNav(link, title))
          }
          <Typography
            variant='body1'
            color='textPrimary'
          >
            {title}
          </Typography>
        </Breadcrumbs>
        <Typography
          variant='h3'
          color='textPrimary'
        >
          {description ?? title}
        </Typography>
        {
          buttonsSecondary
          && (
            <Box mt={2}>
              {buttonsSecondary.map(_renderButton)}
            </Box>
          )
        }
      </Grid>
      {
        buttons
        && (
          <Grid item>
            {buttons.map(_renderButton)}
          </Grid>
        )
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
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  buttons: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    variant: PropTypes.string,
    disableSvg: PropTypes.bool,
    Icon: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired,
    component: PropTypes.object,
    to: PropTypes.string,
  })), PropTypes.bool]),
  buttonsSecondary: PropTypes.arrayOf(PropTypes.shape({
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
