interface Comment {
  comment:string,
  author:string,
  timestamp:string
}

export default interface ArtistLikes {
  _id: string,
  artist: string,
  numberOfLikes: number,
  numberOfDislikes: number,
  project: string,
  comments: Comment[]
};