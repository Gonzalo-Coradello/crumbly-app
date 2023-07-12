import { useFonts } from 'expo-font'
import { useState } from 'react'
import { ActivityIndicator, SafeAreaView, View } from 'react-native'

import { Home, Recipes } from './screens'
import { styles } from './styles'

export default function App() {
  const [loaded, error] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
  })
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

  if (error) {
    console.warn(error)
    return
  }

  if (!loaded)
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    )

  return (
    <SafeAreaView style={styles.container}>
      {isCategorySelected ? (
        <Recipes category={selectedCategory!} handleGoBack={handleNavigate} />
      ) : (
        <Home handleCategory={handleCategory} />
      )}
    </SafeAreaView>
  )
}
