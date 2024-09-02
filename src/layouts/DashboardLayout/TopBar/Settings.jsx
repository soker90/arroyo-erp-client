import { Moon, Sun } from 'lucide-react'

import { Button, Tooltip } from 'components'
import { THEMES } from 'constants/common'
import useSettings from 'hooks/useSettings'

const ThemeToggle = () => {
  const { settings, saveSettings } = useSettings()

  const isDarkMode = settings.theme === THEMES.ONE_DARK

  const toggleTheme = () => {
    const newTheme = isDarkMode ? THEMES.LIGHT : THEMES.ONE_DARK
    saveSettings({ theme: newTheme })
  }

  return (
    <Tooltip title={isDarkMode ? 'Activar modo día' : 'Activar modo noche'}>
      <Button
        variant='icon'
        size='icon'
        onClick={toggleTheme}
        className='text-white hover:bg-foreground/10'
      >
        {isDarkMode
          ? (
            <Sun className='h-5 w-5' />
            )
          : (
            <Moon className='h-5 w-5' />
            )}
        <span className='sr-only'>Cambiar tema</span>
      </Button>
    </Tooltip>
  )
}

ThemeToggle.displayName = 'ThemeToggle'
export default ThemeToggle
