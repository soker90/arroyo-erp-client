import PropTypes from 'prop-types'
import {
  Modal
} from '@mui/material'
import { Grid, Button, Card, CardHeader, CardContent, CardActions } from 'components'
import useSettings from 'hooks/useSettings'

const ModalGrid = ({
  show, close, title, children, action, actions, setShow
}) => {
  const { settings } = useSettings()
  const themeMode = settings.theme === 'LIGHT' ? 'light' : 'dark'
  /**
   * Close Modal
   */
  const onClose = () => {
    setShow(false)
  }

  /**
   * Render all buttons
   * @returns {CardActions}
   * @private
   */
  const _renderButtons = () => (
    <>
      <Button onClick={close || onClose} variant='ghost'>
        {action ? 'Cancelar' : 'Cerrar'}
      </Button>
      {action && (
        <Button onClick={action}>
          Aceptar
        </Button>
      )}
    </>
  )

  /**
   *
   * @param  value
   * @param rest
   * @param {number} index
   * @returns {Button}
   * @private
   */
  // eslint-disable-next-line react/prop-types
  const _renderButton = ({ value, ...rest }, index) => (
    <Button key={index} {...rest}>
      {value}
    </Button>
  )

  return (
    <Modal
      onClose={close || onClose}
      open={show}
      className={themeMode}
    >
      <Card
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline-none shadow-sm lg:shadow-lg w-[700px] max-h-full overflow-y-auto max-w-full'
      >
        <form>
          <CardHeader title={title} />
          <hr />
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              {children}
            </Grid>
          </CardContent>
          <hr />
          <CardActions className='justify-end'>
            {actions?.map(_renderButton) || _renderButtons()}
          </CardActions>
        </form>
      </Card>
    </Modal>
  )
}

ModalGrid.propTypes = {
  close: PropTypes.func,
  show: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  action: PropTypes.func,
  actions: PropTypes.array,
  setShow: PropTypes.func
}

ModalGrid.displayName = 'ModalGrid'

export default ModalGrid
