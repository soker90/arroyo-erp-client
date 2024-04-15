import { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Tooltip
} from '@mui/material'
import { ChevronRight } from 'lucide-react'

import { cn } from 'utils'

import { InputForm } from '../Forms'
import { Typography } from '../ui'

const ListActions = ({
  className,
  data,
  icon,
  title,
  onClick,
  ...rest
}) => {
  const [filter, setFilter] = useState('')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    setSelected(null)
  }, [data])

  const _handleClick = item => {
    setSelected(item._id)
    onClick(item)
  }

  const _handleChangeFilter = ({ target: { value } }) => {
    setFilter(value)
  }

  const _filterList = useMemo(() => (
    filter
      ? data.filter(({ name }) => name.toLowerCase()
        .includes(filter.toLowerCase()))
      : data
  ), [filter, data])

  return (
    <Card
      className={className}
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
          className='p-4'
        />
        {_filterList.map((item, i) => (
          <ListItem
            divider={i < data.length - 1}
            key={item._id}
            onClick={() => _handleClick(item)}
            className='cursor-pointer'
          >
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant='body2'
                className={cn(selected === item._id ? 'text-primary' : 'text-muted-foreground')}
              >
                <span className='font-medium'>
                  {item.name}
                </span>
              </Typography>
            </ListItemText>
            <ListItemSecondaryAction>
              <Tooltip title='View'>
                <IconButton
                  edge='end'
                  size='small'
                  onClick={() => _handleClick(item)}
                >
                  <ChevronRight />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

ListActions.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  icon: PropTypes.node,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default ListActions
