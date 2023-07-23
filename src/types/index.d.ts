import type { RouteProp } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

export interface Category {
  id: string
  name: string
  backgroundImage: string
}

export interface Recipe {
  id: string
  name: string
  categoryId: string
  authorId: string
  fromCrumbly: boolean
  image: string
  description: string
  ingredients: { ingredient: string; quantity: number; unit: string }[]
  steps: string[]
  ratings: number[]
  reviews: string[]
  createdAt: date | string
}

export interface Review {
  id: string
  recipeId: string
  userId: number | string
  rating: number
  review: string
  images: string[]
  createdAt: date | string
  likes: number
}

export interface User {
  id: string
  name: string
  email: string
  password: string
  picture: string // url
  recipes: string[] //recipeId
  favorites: string[] //recipeId
  lists: { name: string; recipes: string[] }[] // recipes: ["recipeId", "recipeId"]
}

export type RecipesParamList = {
  Home: { category: string }
  Recipes: { categoryId: string; category: string }
  RecipeDetail: { recipeId: string }
}

export type FavoritesParamList = {
  Favorites: object
  RecipeDetail: { recipeId: string }
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

export type FavoritesNavigationProp = {
  navigation: NativeStackNavigationProp<FavoritesParamList, 'Favorites'>
  route: RouteProp<FavoritesParamList, 'Favorites'>
}
