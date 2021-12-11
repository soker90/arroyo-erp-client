import { memo, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Header } from 'components';
import NewNoteModal from '../../modals/NewNoteModal';

const HeaderNotes = ({ year }) => {
  const [showModal, setShowModal] = useState(false);

  /**
   * Cierra el modal
   * @private
   */
  const _closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header
        title='Notas'
        description={`Notas ${year}`}
        buttons={[
          {
            component: NavLink,
            to: `/app/notas/${year - 1}`,
            Icon: SkipPreviousIcon,
            label: `${year - 1}`,
            variant: 'outlined',
          },
          {
            component: NavLink,
            to: `/app/notas/${+year + 1}`,
            Icon: SkipNextIcon,
            label: `${+year + 1}`,
            variant: 'outlined',
          },
          {
            Icon: AddIcon,
            label: 'Nueva',
            onClick: () => {
              setShowModal(true);
            },
          },
        ]}
      />
      <NewNoteModal close={_closeModal} show={showModal} year={year} />
    </>
  );
};

HeaderNotes.displayName = 'HeaderNotes';

HeaderNotes.propTypes = {
  year: PropTypes.string.isRequired,
};

export const story = HeaderNotes;
export default memo(HeaderNotes);
