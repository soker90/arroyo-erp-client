import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';

import { Header } from 'components';
import DeletePriceChangeModal from '../../modals/DeletePriceChangeModal';

const HeaderPriceChanges = ({
  selected,
  setSelected,
}) => {
  const [showDelete, setShowDelete] = useState(false);

  const _close = useCallback(() => {
    setShowDelete(false);
    setSelected([]);
  }, [setShowDelete]);

  return (
    <>
      <Header
        title='Cambio de precios'
        selected={selected}
        buttons={[{
          variant: 'contained',
          onClick: () => {
            setShowDelete(true);
          },
          Icon: DeleteIcon,
          disableSvg: true,
          label: 'Eliminar',
          disabled: !selected.length,
        }]}
      />
      <DeletePriceChangeModal show={showDelete} ids={selected} close={_close} />
    </>
  );
};

HeaderPriceChanges.propTypes = {
  selected: PropTypes.array.isRequired,
  setSelected: PropTypes.func.isRequired,
};

HeaderPriceChanges.displayName = 'HeaderPriceChanges';
export const story = HeaderPriceChanges;
export default HeaderPriceChanges;
