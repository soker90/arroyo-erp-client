import { Button, Typography } from 'components'

const NotNetwork = () => (
  <div
    className='p-6 pt[10vh] flex flex-col items-center'
  >
    <Typography
      align='center'
      variant='h1'
    >
      Sin conexión
    </Typography>
    <Typography
      align='center'
      variant='subtitle2'
      className='mt-2 mb-6'
    >
      ¡Oh, no! No podemos conectar con el Backend.
    </Typography>
    <Typography
      align='center'
      variant='subtitle2'
    >
      1. Comprueba tu conexion a Internet.
    </Typography>
    <Typography
      align='center'
      variant='subtitle2'
    >
      2. Comprueba la conexion a la VPN.
    </Typography>
    <Typography
      align='center'
      variant='subtitle2'
    >
      3. Pulsa Ctrl + shift + R para refrescar.
    </Typography>
    <Typography
      align='center'
      variant='subtitle2'
    >
      4. Pregunta a Backend.
    </Typography>
    <div className='mt-12 flex justify-center'>
      <img
        alt='image_error'
        className='m-w-full w-[560px] m-h-[300px] h-auto'
        src='/static/images/error.svg'
      />
    </div>
    <div className='mt-12 flex justify-center'>
      <Button
        onClick={() => window.location.reload()}
      >
        Refrescar
      </Button>
    </div>
  </div>
)

export default NotNetwork
