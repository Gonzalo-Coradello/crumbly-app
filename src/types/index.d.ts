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
