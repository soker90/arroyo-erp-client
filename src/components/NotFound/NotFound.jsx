import {
  Typography,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { Page, Button, Container } from 'components'
import { useStyles } from './NotFound.styles'

const NotFound = () => {
  const classes = useStyles()
  const theme = useTheme()
  const mobileDevice = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <Page className={classes.root} title='Error 404: Página no encontrada'>
      <Container maxWidth>
        <Typography
          align='center'
          variant={mobileDevice ? 'h4' : 'h1'}
          color='textPrimary'
        >
          Error 404: Página no encontrada
        </Typography>
        <Typography align='center' variant='subtitle2' color='textSecondary'>
          ¡Oh, no! No encontramos la pàgina que estás buscando
        </Typography>
        <Box mt={6} display='flex' justifyContent='center'>
          <img
            alt='Under development'
            className={classes.image}
            src='/static/images/error404.svg'
          />
        </Box>
        <Box mt={6} display='flex' justifyContent='center'>
          <Button
            to='/'
            variant='outline'
          >
            Volver a la página inicial
          </Button>
        </Box>
      </Container>
    </Page>
  )
}

NotFound.displayName = 'NotFound'

export default NotFound
