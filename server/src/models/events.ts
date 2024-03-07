import mongoose, { InferSchemaType } from "mongoose";
const Schema = mongoose.Schema;

type ArtistType = InferSchemaType<typeof artistSchema>;
type ProjectsType = InferSchemaType<typeof projectSchema>;
type ArtistLikesType = InferSchemaType<typeof artistLikes>;

const artistSchema = new Schema({
  name: String,
  location: String,
  rate: String,
  skills: [String],
  mainSkill: String,
  profileImg: String,
  work: [
    {
      description: [String],
      images: [String],
    },
  ],
});

const projectSchema = new Schema({
  projectOwner: String,
  description: String,
  projectName: String,
  startDate: Date,
  endDate: Date,
  thumbImage: String,
  artists: [
    {
      type: mongoose.Types.ObjectId,
      ref: "ArtistLikes",
    },
  ],
});


const artistLikes = new Schema({
  artist: {
    type: mongoose.Types.ObjectId,
    ref: "Artist",
  },
  numberOfLikes: {
    type: Number,
    default: 0,
  },
  numberOfDislikes: {
    type: Number,
    default: 0,
  },
  project: {
    type: mongoose.Types.ObjectId,
    ref: "Projects",
  },
});


const Artist = mongoose.model("Artist", artistSchema);
const Projects = mongoose.model("Project", projectSchema);
const ArtistLikes = mongoose.model("Likes", artistLikes);

export { Artist, Projects, ArtistLikes };
export type {ArtistType, ProjectsType, ArtistLikesType};