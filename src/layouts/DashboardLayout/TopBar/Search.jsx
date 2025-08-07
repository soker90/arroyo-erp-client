import { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { SearchIcon } from 'lucide-react'

import { useProviders } from 'hooks'
import { navigateTo } from 'utils'

/**
 * Barra de busqueda de proveedores
 */
const Search = () => {
  const searchRef = useRef(null)
  const [openSearchPopover, setOpenSearchPopover] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const { providers } = useProviders()
  const navigate = useNavigate()

  const _handleSearchChange = ({ target: { value } }) => {
    setSearchValue(value)
    value ? !openSearchPopover && setOpenSearchPopover(true) : setOpenSearchPopover(false)
  }

  const _handleSearchPopverClose = () => {
    setOpenSearchPopover(false)
  }

  const _handleSelectProvider = (idProvider) => {
    _handleSearchPopverClose()
    navigateTo(`proveedores/${idProvider}`, navigate)
  }

  const _filterPossibles = (provider) => provider.name.toLowerCase().includes(searchValue.toLowerCase())

  const _renderSearchedItem = ({ _id, name }) => (
    <button
      key={_id}
      className='flex items-center w-full px-4 py-2 text-left hover:bg-gray-100'
      onClick={() => _handleSelectProvider(_id)}
    >
      <SearchIcon className='mr-4 h-5 w-5' />
      <span>{name}</span>
    </button>
  )

  return (
    <div className='hidden md:block relative'>
      <div
        className='bg-white/10 rounded-xs flex items-center px-4 w-72 h-9'
        ref={searchRef}
      >
        <SearchIcon className='mr-4 h-5 w-5' />
        <input
          className='bg-transparent text-white placeholder-white/50 focus:outline-hidden w-full'
          onChange={_handleSearchChange}
          placeholder='Buscar proveedor'
          value={searchValue}
        />
      </div>
      {openSearchPopover && (
        <div className='absolute top-full left-0 mt-2 w-full z-10'>
          <div className='bg-white rounded-md shadow-lg max-h-60 overflow-y-auto text-foreground'>
            {providers?.filter(_filterPossibles).map(_renderSearchedItem)}
          </div>
        </div>
      )}
    </div>
  )
}

Search.displayName = 'Search'

export default Search
