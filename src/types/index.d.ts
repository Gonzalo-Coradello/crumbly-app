import type { RouteProp } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

export interface Category {
  id: string
  name: string
  backgroundImage: string
}

export interface Recipe {
  id: number
  name: string
  categoryId: string
  author: string
  image: string
  description: string
  ingredients: { ingredient: string; quantity: number }[]
  steps: string[]
  rating: number
  reviews: string[]
  createdAt: date | string
}

export interface Review {
  id: number | string
  recipeId: number | string
  userId: number | string
  rating: number
  review: string
  images: string[]
  createdAt: date | string
  likes: number
}

export interface User {
  id: number | string
  email: string
  password: string
  profile: string // url
  recipes: string[] //recipeId
  favorites: string[] //recipeId
  lists: { name: string; recipes: string[] }[] // recipes: ["recipeId", "recipeId"]
}

export type RecipesParamList = {
  Home: { category: string }
  Recipes: { categoryId: string; category: string }
  RecipeDetail: { recipeId: number; category: string }
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
