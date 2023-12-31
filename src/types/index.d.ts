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
  image: string
  description: string
  ingredients: { ingredient: string; quantity: number; unit: string }[]
  steps: { id: number; step: string }[]
  createdAt: string | number
}

export interface Review {
  id: string
  recipeId: string
  userId: string
  rating: number
  review: string
  image: string
  createdAt: string | number
}

export interface User {
  localId: string
  name: string
  email: string
  password: string
  image: string
  recipes: string[]
  favorites: string[]
  lists: { name: string; recipes: string[] }[]
}

export type Ingredient = { ingredient: string; quantity: number; units: string[]; unit: string }

export type RecipesParamList = {
  Recipes: { categoryId: string; category: string; list: string }
  RecipeDetail: { recipeId: string }
  CreateList: { recipeId: string | undefined }
  CreateRating: { recipeId: string; selectedRating: number }
}

export type HomeParamList = RecipesParamList & {
  Home: undefined
}

export type ProfileParamList = RecipesParamList & {
  Profile: undefined
  CreateList: { recipeId: string | undefined }
  CreateRecipe: { recipe?: Recipe }
  Ingredients: undefined
  ImagePicker: undefined
}

export type CreateListParamList = {
  Profile: undefined
  CreateList: { recipeId: string | undefined }
}

export type HomeNavigationProp = {
  navigation: NativeStackNavigationProp<HomeParamList, 'Home'>
  route: RouteProp<HomeParamList, 'Home'>
}

export type RecipesNavigationProp = {
  navigation: NativeStackNavigationProp<RecipesParamList, 'Recipes'>
  route: RouteProp<RecipesParamList, 'Recipes'>
}

export type DetailNavigationProps = {
  navigation: NativeStackNavigationProp<RecipesParamList, 'RecipeDetail'>
  route: RouteProp<RecipesParamList, 'RecipeDetail'>
}

export type ProfileNavigationProp = {
  navigation: NativeStackNavigationProp<ProfileParamList, 'Profile'>
  route: RouteProp<ProfileParamList, 'Profile'>
}

export type CreateListNavigationProps = {
  navigation: NativeStackNavigationProp<CreateListParamList, 'CreateList'>
  route: RouteProp<CreateListParamList, 'CreateList'>
}

export type CreateRecipeNavigationProps = {
  navigation: NativeStackNavigationProp<ProfileParamList, 'CreateRecipe'>
  route: RouteProp<ProfileParamList, 'CreateRecipe'>
}
