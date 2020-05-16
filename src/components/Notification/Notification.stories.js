import React from 'react';

import ThemeWrapper from 'story/ThemeWrapper';
import MySnackbarContentWrapper from './components/MySnackbarContentWrapper';

export default {
  title: 'Componentes/Notificaciones',
};

const Success = () => {
  return <ThemeWrapper>
    <MySnackbarContentWrapper variant='success' message='Correcto'/>
  </ThemeWrapper>;
}

Success.story = {
  name: 'Correcta',
};

const Warning = () => {
  return <ThemeWrapper>
    <MySnackbarContentWrapper variant='warning' message='Advertencia'/>
  </ThemeWrapper>;
}

Warning.story = {
  name: 'Advertencia',
};

const Error = () => {
  return <ThemeWrapper>
    <MySnackbarContentWrapper variant='error' message='Error'/>
  </ThemeWrapper>;
}

Error.story = {
  name: 'Error',
};

const Info = () => {
  return <ThemeWrapper>
    <MySnackbarContentWrapper variant='info' message='Información'/>
  </ThemeWrapper>;
}

Info.story = {
  name: 'Información',
};

export {Success, Warning, Error, Info};
