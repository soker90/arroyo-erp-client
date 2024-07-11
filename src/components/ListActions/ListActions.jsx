import { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { ChevronRight } from 'lucide-react'

import {
  Card,
  Typography,
  Button,
  ListItem,
  List,
  ListSubheader,
  ListItemText,
  ListItemSecondaryAction
} from 'components'
import { cn } from 'utils'

import { InputForm } from '../Forms'

const ListActions = ({
  className,
  data,
  Icon,
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
          <ListSubheader>
            {title}
          </ListSubheader>
        )}
      >
        <InputForm
          value={filter}
          onChange={_handleChangeFilter}
          size={12}
          placeholder='Filtrar...'
          className='pr-4'
        />
        {_filterList.map((item, i) => (
          <ListItem
            divider={i < data.length - 1}
            key={item._id}
            onClick={() => _handleClick(item)}
            className='cursor-pointer py-2 pr-12 pl-4'
          >
            <Icon className='text-muted-foreground mr-2' />
            <ListItemText>
              <Typography
                variant='body2'
                className={cn(selected === item._id ? 'text-primary' : 'text-muted-foreground')}
              >
                <span className='font-semibold'>
                  {item.name}
                </span>
              </Typography>
            </ListItemText>
            <ListItemSecondaryAction>
              <Button
                variant={selected === item._id ? 'text' : 'ghost'}
                size='icon'
                onClick={() => _handleClick(item)}
                className='rounded-full'
              >
                <ChevronRight />
              </Button>
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
  Icon: PropTypes.object,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default ListActions
