import mongoose, { InferSchemaType } from "mongoose";
const Schema = mongoose.Schema;

type ArtistType = InferSchemaType<typeof artistSchema>;
type ProjectsType = InferSchemaType<typeof projectSchema>;
type ArtistLikesType = InferSchemaType<typeof artistLikes>;

const artistSchema = new Schema({
  name: {type: String, required: true},
  location: {type: String, required: true},
  rate: {type: String, required: true},
  skills: [String],
  mainSkill: {type: String, required: true},
  profileImg: String,
  work: [
    {
      description: [String],
      images: [String],
    },
  ],
});

const projectSchema = new Schema({
  projectOwner: {type: String, required: true},
  description: String,
  projectName: {type: String, required: true},
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
    required: true
  },
  numberOfLikes: {
    type: Number,
    default: 0,
    required: true
  },
  numberOfDislikes: {
    type: Number,
    default: 0,
    required: true
  },
  project: {
    type: mongoose.Types.ObjectId,
    ref: "Projects",
    required: true
  },
});


const Artist = mongoose.model("Artist", artistSchema);
const Projects = mongoose.model("Project", projectSchema);
const ArtistLikes = mongoose.model("Likes", artistLikes);

export { Artist, Projects, ArtistLikes };
export type { ArtistType, ProjectsType, ArtistLikesType };