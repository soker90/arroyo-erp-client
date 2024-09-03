import PropTypes from 'prop-types'

import {
  Button, Grid, Typography, Breadcrumb,
  BreadcrumbLink,
  BreadcrumbPage
} from 'components'

import { cn } from 'utils'

const Header = ({
  className, routes = [], title, description, buttons, buttonsSecondary, ...rest
}) => {
  /**
   * Renderiza un elemento de la cabecera de navegación
   * @param {String} link
   * @param {String} title
   * @return {Link}
   * @private
   */
  const _itemNav = (link, title) => (
    <BreadcrumbLink
      key={title}
      to={link}
    >
      {title}
    </BreadcrumbLink>
  )

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
    variant, disableSvg, Icon, label, ...rest
  }) => (
    <Button
      key={label}
      variant={variant}
      className='mb-2 ml-2'
      {...rest}
    >
      <Icon className='mr-1 text-sm' size={20} />

      {label}
    </Button>
  )

  return (
    <Grid
      className={cn('justify-between', className)}
      {...rest}
    >
      <Grid item>
        <Breadcrumb>
          {_itemNav('/app', 'Inicio')}
          {
            routes.map(({ link, title }) => _itemNav(link, title))
          }

          <BreadcrumbPage>{title}</BreadcrumbPage>
        </Breadcrumb>
        <Typography
          variant='h3'
          color='textPrimary'
        >
          {description ?? title}
        </Typography>
        {
          buttonsSecondary &&
          (
            <div className='mt-4'>
              {buttonsSecondary.map(_renderButton)}
            </div>
          )
        }
      </Grid>
      {
        buttons &&
        (
          <Grid item className='flex'>
            {buttons.map(_renderButton)}
          </Grid>
        )
      }
    </Grid>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
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
    disabled: PropTypes.bool
  })), PropTypes.bool]),
  buttonsSecondary: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    variant: PropTypes.string,
    disableSvg: PropTypes.bool,
    Icon: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
  }))
}

export default Header
