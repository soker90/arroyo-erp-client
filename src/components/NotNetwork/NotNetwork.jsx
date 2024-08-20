import { Button, Typography } from 'components'
import { useStyles } from './NotNetwork.styles'

const NotNetwork = () => {
  const classes = useStyles()

  return (
    <div
      className={classes.root}
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
        className={classes.subtitle}
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
      <div className={classes.imageContainer}>
        <img
          alt='image_error'
          className={classes.image}
          src='/static/images/error.svg'
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button
          onClick={() => window.location.reload()}
        >
          Refrescar
        </Button>
      </div>
    </div>
  )
}

export default NotNetwork
