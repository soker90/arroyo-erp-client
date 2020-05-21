import React from 'react';

import {story as Auth} from './Auth';

export default {
  title: 'Rutas|Login/Layout',
  parameters: {
    component: Auth,
    componentSubtitle: 'Layout de Login',
  },
};

const Layout = () => <Auth/>;

Layout.story = {
  name: 'Layout',
};

export {Layout};
