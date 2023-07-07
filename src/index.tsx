import { useState } from 'react'
import { SafeAreaView, View } from 'react-native'

import { Home, Recipes } from './screens'
import { styles } from './styles'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<null | string>(null)
  const [isCategorySelected, setIsCategorySelected] = useState(false)

  const handleCategory = (category: string) => {
    setSelectedCategory(category)
    setIsCategorySelected(!isCategorySelected)
  }

  const handleNavigate = () => {
    setSelectedCategory(null)
    setIsCategorySelected(!isCategorySelected)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {isCategorySelected ? (
          <Recipes category={selectedCategory!} handleGoBack={handleNavigate} />
        ) : (
          <Home handleCategory={handleCategory} />
        )}
      </View>
    </SafeAreaView>
  )
}
