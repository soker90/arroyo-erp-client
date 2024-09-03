import { Card, CardContent } from '../../'
import ItemCard from './ItemCard'

export default {
  title: 'Componentes/Item Card',
  parameters: {
    component: ItemCard,
    componentSubtitle: 'Muestra datos del tipo [Texto: valor] dentro de una tarjeta'
  },
  decorators: [storyFn => (
    <Card>
      <CardContent>{storyFn()}</CardContent>
    </Card>
  )]

}

const CardDefault = () => (
  <ItemCard
    value='Mi texto'
    label='Etiqueta'
    divider
    variant='default'
  />
)

CardDefault.storyName = 'Item Card'

const CardBoolean = () => (
  <ItemCard
    value={false}
    label='Etiqueta'
    divider
    variant='boolean'
  />
)

CardBoolean.storyName = 'Boolean'

const CardEuro = () => (
  <ItemCard
    value={12.64}
    label='Etiqueta'
    divider
    variant='euro'
  />
)

CardEuro.storyName = 'Euro'

export { CardDefault, CardBoolean, CardEuro }
