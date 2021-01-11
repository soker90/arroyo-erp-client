import { memo } from 'react';
import PropTypes from 'prop-types';
import TelegramIcon from '@material-ui/icons/Telegram';
import DeleteIcon from '@material-ui/icons/Delete';
import { Header } from 'components';

const HeaderPriceChanges = ({ selected, sendTelegramPrices }) => (
  <>
    <Header
      title='Cambio de precios'
      selected={selected}
      buttons={[{
        variant: 'contained',
        onClick: () => {
          sendTelegramPrices(selected);
        },
        Icon: TelegramIcon,
        disableSvg: true,
        color: 'primary',
        label: 'Envíar',
      }, {
        variant: 'contained',
        onClick: () => {

        },
        Icon: DeleteIcon,
        disableSvg: true,
        label: 'Eliminar',
      }]}
    />
  </>
);

HeaderPriceChanges.propTypes = {
  selected: PropTypes.array.isRequired,
  sendTelegramPrices: PropTypes.func.isRequired,
};

HeaderPriceChanges.displayName = 'HeaderPriceChanges';
export const story = HeaderPriceChanges;
export default memo(HeaderPriceChanges);
