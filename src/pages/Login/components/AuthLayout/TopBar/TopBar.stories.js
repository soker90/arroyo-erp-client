import { story as TopBar } from './TopBar'

export default {
  title: 'Rutas/Login/Layout/TopBar',
  parameters: {
    component: TopBar,
    componentSubtitle: 'Barra superior del login'
  }
}

const TopBarStory = () => <TopBar />

TopBarStory.storyName = 'TopBar'

export { TopBarStory }
