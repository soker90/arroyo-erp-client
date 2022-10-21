/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'
import {
  ClickAwayListener,
  Hidden,
  Input,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import { navigateTo } from 'utils'
import { useStyles } from './Search.styles'

/**
 * Barra de busqueda de proveedores
 */
const Search = () => {
  const classes = useStyles()
  const searchRef = useRef(null)
  const [openSearchPopover, setOpenSearchPopover] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  // eslint-disable-next-line no-shadow
  const providers = useSelector(({ providers }) => providers.providers)
  const navigate = useNavigate()

  /**
   * Establece el texto buscado en el estado
   * abre o cierra la lista de sugerencias
   * @param {String} value
   * @private
   */
  const _handleSearchChange = ({ target: { value } }) => {
    setSearchValue(value)

    // eslint-disable-next-line no-unused-expressions
    value
      ? !openSearchPopover && setOpenSearchPopover(true)
      : setOpenSearchPopover(false)
  }

  /**
   * Cierra la lista de sugerencias a pinchar en otro
   * sitio de la pantalla
   * @private
   */
  const _handleSearchPopverClose = () => {
    setOpenSearchPopover(false)
  }

  /**
   * Navigate to provider selected
   * @param {String} idProvider
   * @private
   */
  const _handleSelectProvider = idProvider => {
    _handleSearchPopverClose()
    navigateTo(`proveedores/${idProvider}`, navigate)
  }

  /**
   * Filtra los posibles proveedores que coincidan
   * con la búsqueda
   * @param {{name: String}} provider
   * @return {boolean}
   * @private
   */
  const _filterPossibles = provider => provider.name
    .toLowerCase()
    .includes(searchValue.toLowerCase())

  /**
   * Renderiza un elemento de la busqueda
   * @param {String} _id,
   * @param {String} name
   * @return {ListItem}
   * @private
   */
  const _renderSearchedItem = ({
    _id,
    name
  }) => (
    <ListItem
      button
      key={_id}
      onClick={() => _handleSelectProvider(_id)}
    >
      <ListItemIcon>
        <SearchIcon />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  )

  return (
    <Hidden mdDown>
      <div
        className={classes.search}
        ref={searchRef}
      >
        <SearchIcon className={classes.searchIcon} />
        <Input
          className={classes.searchInput}
          disableUnderline
          onChange={_handleSearchChange}
          placeholder='Buscar proveedor'
          value={searchValue}
        />
      </div>
      <Popper
        anchorEl={searchRef.current}
        className={classes.searchPopper}
        open={openSearchPopover}
      >
        <ClickAwayListener onClickAway={_handleSearchPopverClose}>
          <Paper
            className={classes.searchPopperContent}
            elevation={3}
          >
            <List>
              {providers
                .filter(_filterPossibles)
                .map(_renderSearchedItem)}
            </List>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Hidden>
  )
}

Search.displayName = 'Search'

export default Search
