import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ListItemIcon, ListItemText, Tooltip, IconButton, Menu, MenuItem,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import MoreIcon from '@mui/icons-material/MoreVert';
import GetAppIcon from '@mui/icons-material/GetApp';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AchiveIcon from '@mui/icons-material/ArchiveOutlined';

const useStyles = makeStyles(() => ({
  menu: {
    width: 256,
    maxWidth: '100%',
  },
}));

const GenericMoreButton = props => {
  const classes = useStyles();
  const moreRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <Tooltip title='More options'>
        <IconButton {...props} onClick={handleMenuOpen} ref={moreRef} size='large'>
          <MoreIcon fontSize='small' />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={moreRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handleMenuClose}
        open={openMenu}
        PaperProps={{ className: classes.menu }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <GetAppIcon />
          </ListItemIcon>
          <ListItemText primary='Import' />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FileCopyIcon />
          </ListItemIcon>
          <ListItemText primary='Copy' />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PictureAsPdfIcon />
          </ListItemIcon>
          <ListItemText primary='Export' />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AchiveIcon />
          </ListItemIcon>
          <ListItemText primary='Achive' />
        </MenuItem>
      </Menu>
    </>
  );
};

GenericMoreButton.propTypes = {
  className: PropTypes.string,
};

export default GenericMoreButton;
