import User from "./User"
export default interface Comment {
  id: number,
  user: User,
  content: string,
  createdAt: Date,
  updatedAt: Date
}