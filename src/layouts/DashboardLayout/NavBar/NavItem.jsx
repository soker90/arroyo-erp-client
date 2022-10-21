import { useState } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Button, Collapse, ListItem } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

const useStyles = makeStyles(theme => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%'
  },
  buttonLeaf: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      '& $title': {
        fontWeight: theme.typography.fontWeightMedium
      }
    }
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  title: {
    marginRight: 'auto'
  },
  active: {
    '& button': {
      color: theme.palette.secondary.main,
      '& $title': {
        fontWeight: theme.typography.fontWeightMedium
      },
      '& $icon': {
        color: theme.palette.secondary.main
      }
    }
  }
}))

const NavItem = ({
  title,
  href,
  depth,
  children,
  icon: Icon,
  className,
  open: openProp,
  info: Info,
  ...rest
}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(openProp)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  let paddingLeft = 8

  if (depth > 0) paddingLeft = 32 + 8 * depth

  const style = { paddingLeft }

  if (children) {
    return (
      <ListItem
        className={clsx(classes.item, className)}
        disableGutters
        key={title}
        {...rest}
      >
        <Button
          className={classes.button}
          onClick={handleToggle}
          style={style}
        >
          {Icon && (
            <Icon
              className={classes.icon}
              size='20'
            />
          )}
          <span className={classes.title}>
            {title}
          </span>
          {open
            ? (
              <ExpandLessIcon
                size='small'
                color='inherit'
              />
              )
            : (
              <ExpandMoreIcon
                size='small'
                color='inherit'
              />
              )}
        </Button>
        <Collapse in={open}>
          {children}
        </Collapse>
      </ListItem>
    )
  }

  return (
    <ListItem
      className={clsx(classes.itemLeaf, className)}
      disableGutters
      key={title}
      {...rest}
    >
      <RouterLink to={href} className={({ isActive }) => (isActive ? classes.active : undefined)}>
        <Button
          className={clsx(classes.buttonLeaf, `depth-${depth}`)}
          style={style}
        >
          {Icon && (
            <Icon
              className={classes.icon}
              size='20'
            />
          )}
          <span className={classes.title}>
            {title}
          </span>
          {Info && <Info className={classes.info} />}
        </Button>
      </RouterLink>
    </ListItem>
  )
}

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.any,
  info: PropTypes.any,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired
}

NavItem.defaultProps = {
  open: false
}

export default NavItem
