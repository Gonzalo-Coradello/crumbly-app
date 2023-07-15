import type { RouteProp } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

export interface Category {
  id: number
  name: string
  backgroundImage: string
}

export interface Recipe {
  id: number
  name: string
  category: string
  author: string
  image: string
}

export type RecipesParamList = {
  Home: { category: string }
  Recipes: { category: string }
  RecipeDetail: { recipeId: number; recipeName: string }
}

export type HomeNavigationProp = {
  navigation: NativeStackNavigationProp<RecipesParamList, 'Home'>
  route: RouteProp<RecipesParamList, 'Home'>
}

export type RecipesNavigationProp = {
  navigation: NativeStackNavigationProp<RecipesParamList, 'Recipes'>
  route: RouteProp<RecipesParamList, 'Recipes'>
}

export type DetailNavigationProps = {
  navigation: NativeStackNavigationProp<RecipesParamList, 'RecipeDetail'>
  route: RouteProp<RecipesParamList, 'RecipeDetail'>
}
