import type { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { RecipeList } from 'src/components'
import { RecipesParamList } from 'src/types'

import { styles } from './styles'

type RecipesNavigationProp = {
  navigation: NativeStackNavigationProp<RecipesParamList, 'Recipes'>
  route: RouteProp<RecipesParamList, 'Recipes'>
}

const mockRecipes = [
  {
    id: 1,
    name: 'Muffin de chocolate',
    category: 'Muffins y budines',
    author: 'Equipo Crumbly',
    image:
      'https://gimmedelicious.com/wp-content/uploads/2021/03/Double-Chocolate-Chip-Muffins-500x500.jpg',
  },
  {
    id: 2,
    name: 'Muffin de chocolate',
    category: 'Muffins y budines',
    author: 'Equipo Crumbly',
    image:
      'https://gimmedelicious.com/wp-content/uploads/2021/03/Double-Chocolate-Chip-Muffins-500x500.jpg',
  },
  {
    id: 3,
    name: 'Muffin de chocolate',
    category: 'Muffins y budines',
    author: 'Equipo Crumbly',
    image:
      'https://gimmedelicious.com/wp-content/uploads/2021/03/Double-Chocolate-Chip-Muffins-500x500.jpg',
  },
  {
    id: 4,
    name: 'Tarta de manzanas',
    category: 'Tartas',
    author: 'Equipo Crumbly',
    image:
      'https://www.abakingjourney.com/wp-content/uploads/2019/11/French-Apple-Tart-Feature.jpg',
  },
  {
    id: 5,
    name: 'Tarta de manzanas',
    category: 'Tartas',
    author: 'Equipo Crumbly',
    image:
      'https://www.abakingjourney.com/wp-content/uploads/2019/11/French-Apple-Tart-Feature.jpg',
  },
  {
    id: 6,
    name: 'Tarta de manzanas',
    category: 'Tartas',
    author: 'Equipo Crumbly',
    image:
      'https://www.abakingjourney.com/wp-content/uploads/2019/11/French-Apple-Tart-Feature.jpg',
  },
  {
    id: 7,
    name: 'Cookies',
    category: 'Cookies',
    author: 'Equipo Crumbly',
    image:
      'https://lifemadesweeter.com/wp-content/uploads/Soft-and-Chewy-Keto-Chocolate-Chip-Cookies-Recipe-Photo-Picture-Paleo-Gluten-Free-copy-500x500.jpg',
  },
  {
    id: 8,
    name: 'Cookies',
    category: 'Cookies',
    author: 'Equipo Crumbly',
    image:
      'https://lifemadesweeter.com/wp-content/uploads/Soft-and-Chewy-Keto-Chocolate-Chip-Cookies-Recipe-Photo-Picture-Paleo-Gluten-Free-copy-500x500.jpg',
  },
  {
    id: 9,
    name: 'Cookies',
    category: 'Cookies',
    author: 'Equipo Crumbly',
    image:
      'https://lifemadesweeter.com/wp-content/uploads/Soft-and-Chewy-Keto-Chocolate-Chip-Cookies-Recipe-Photo-Picture-Paleo-Gluten-Free-copy-500x500.jpg',
  },
]

const Recipes = ({ navigation, route }: RecipesNavigationProp) => {
  const category = route.params.category
  // const [filteredRecipes, setFilteredRecipes] = useState([])
  // const [search, setSearch] = useState('')
  // const [borderColor] = useState(COLORS.primary)

  const recipesByCategory = mockRecipes.filter((recipe) => recipe.category === category)

  return (
    <View style={styles.container}>
      {/* <Header title={category} /> */}
      <RecipeList recipes={recipesByCategory} category={category} />
    </View>
  )
}

export default Recipes
