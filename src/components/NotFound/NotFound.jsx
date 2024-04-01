import {
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { Page, Button, Container, Typography } from 'components'
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
          className='mt-3 font-semibold'
        >
          Error 404: Página no encontrada
        </Typography>
        <Typography className='text-muted-foreground text-center mt-4' variant='subtitle2'>
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
