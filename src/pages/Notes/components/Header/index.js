import { memo, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

import { Header } from 'components';
import NewNoteModal from '../../modals/NewNoteModal';

const HeaderNotes = () => {
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
        buttons={[
          {
            Icon: AddIcon,
            label: 'Nueva',
            onClick: () => {
              setShowModal(true);
            },
          },
        ]}
      />
      <NewNoteModal close={_closeModal} show={showModal} />
    </>
  );
};

HeaderNotes.displayName = 'HeaderNotes';
export const story = HeaderNotes;
export default memo(HeaderNotes);
