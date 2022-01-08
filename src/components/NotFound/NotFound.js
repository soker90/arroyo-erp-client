import { Link as RouterLink } from 'react-router-dom';
import {
  Typography,
  Button,
  Container,
  Box,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import Page from 'components/Page';
import { useStyles } from './NotFound.styles';

const NotFound = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Page className={classes.root} title='Error 404: Página no encontrada'>
      <Container maxWidth='lg'>
        <Typography
          align='center'
          variant={mobileDevice ? 'h4' : 'h1'}
          color='textPrimary'
        >
          Error 404: Página no encontrada
        </Typography>
        <Typography align='center' variant='subtitle2' color='textSecondary'>
          ¡Oh, no! No encontramos la pàgina que estás buscando
        </Typography>
        <Box mt={6} display='flex' justifyContent='center'>
          <img
            alt='Under development'
            className={classes.image}
            src='/static/images/error404.svg'
          />
        </Box>
        <Box mt={6} display='flex' justifyContent='center'>
          <Button
            color='secondary'
            component={RouterLink}
            to='/'
            variant='outlined'
          >
            Volver a la página inicial
          </Button>
        </Box>
      </Container>
    </Page>
  );
};

NotFound.displayName = 'NotFound';

export default NotFound;
