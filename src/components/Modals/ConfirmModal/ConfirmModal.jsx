import PropTypes from 'prop-types'
import { Grid, Typography } from 'components'
import { ModalGrid } from '../index'

const ConfirmModal = ({ description, ...props }) => (
  <ModalGrid {...props}>
    <Grid
      item
      md={12}
      xs={12}
    >
      <Typography variant='body1'>
        {description}
      </Typography>
    </Grid>
  </ModalGrid>
)

ConfirmModal.propTypes = {
  close: PropTypes.func,
  show: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.func
}

ConfirmModal.displayName = 'ConfirmModal'

export default ConfirmModal
