import { View } from 'react-native'
// import { Input } from 'src/components'
import { RecipeList } from 'src/components'
// import { COLORS } from 'src/themes'

// import { styles } from './styles'

// import { useState } from 'react'

type Props = {
  category: string
  handleGoBack: () => void
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

const Recipes = ({ category, handleGoBack }: Props) => {
  // const [filteredRecipes, setFilteredRecipes] = useState([])
  // const [search, setSearch] = useState('')
  // const [borderColor] = useState(COLORS.primary)

  const recipesByCategory = mockRecipes.filter((recipe) => recipe.category === category)

  return (
    <View>
      <RecipeList recipes={recipesByCategory} handleGoBack={handleGoBack} category={category} />
    </View>
  )
}

export default Recipes
