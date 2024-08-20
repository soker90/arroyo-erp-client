import { Page, Button, Container, Typography } from 'components'

const NotFound = () => (
  <Page className='bg-background flex items-center min-h-full px-6' title='Error 404: Página no encontrada'>
    <Container maxWidth>
      <Typography
        align='center'
        variant='h4'
        className='mt-3 font-semibold md:text-4xl'
      >
        Error 404: Página no encontrada
      </Typography>
      <Typography className='text-muted-foreground text-center mt-4' variant='subtitle2'>
        ¡Oh, no! No encontramos la pàgina que estás buscando
      </Typography>
      <div className='flex justify-center mt-12'>
        <img
          alt='Under development'
          className='max-w-full w-96 h-auto'
          src='/static/images/error404.svg'
        />
      </div>
      <div className='flex justify-center mt-12'>
        <Button
          to='/'
          variant='outline'
        >
          Volver a la página inicial
        </Button>
      </div>
    </Container>
  </Page>
)

export default NotFound
