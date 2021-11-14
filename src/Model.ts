export interface Post {
  id: number
  time: Date
  rating: number
  name: string
  text: string
  children: Post[]
}
