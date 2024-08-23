import { useRef, useState } from 'react'
import {
  Box, Popover
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Settings as SettingsIcon } from 'lucide-react'

import { Button, Tooltip, Typography, Grid, SelectForm } from 'components'
import useSettings from 'hooks/useSettings'
import { THEMES, THEMES_NAME } from 'constants/common'

const useStyles = makeStyles(theme => ({
  popover: {
    width: 320,
    padding: theme.spacing(2)
  }
}))

const Settings = () => {
  const classes = useStyles()
  const ref = useRef(null)
  const { settings, saveSettings } = useSettings()
  const [isOpen, setOpen] = useState(false)
  const [values, setValues] = useState({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme
  })

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (field, value) => {
    setValues({
      ...values,
      [field]: value
    })
  }

  const handleSave = () => {
    saveSettings(values)
    setOpen(false)
  }

  return (
    <>
      <Tooltip title='Ajustes'>
        <Button size='icon' variant='icon' className='text-inherit hover:bg-inherit' onClick={handleOpen} ref={ref}>
          <SettingsIcon />
        </Button>
      </Tooltip>
      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        classes={{ paper: classes.popover }}
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
      >
        <Typography
          variant='h4'
          className='font-normal text-inherit'
        >
          Configuración
        </Typography>
        <Grid className='mt-2'>
          <SelectForm
            label='Tema'
            name='theme'
            onChange={event => handleChange('theme', event.target.value)}
            value={values.theme}
            size={12}
            className='[&_*]:!text-inherit'
          >
            {Object.keys(THEMES)
              .map(theme => (
                <option key={theme} value={theme}>
                  {THEMES_NAME[theme]}
                </option>
              ))}
          </SelectForm>
        </Grid>
        <Box mt={2}>
          <Button
            variant='secondary'
            className='w-full'
            onClick={handleSave}
          >
            Guardar
          </Button>
        </Box>
      </Popover>
    </>
  )
}

Settings.displayName = 'Settings'
export default Settings
