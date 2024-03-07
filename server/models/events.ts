const mongoose = require("./index.js");
const Schema = mongoose.Schema;

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
      type: mongoose.ObjectId,
      ref: "ArtistLikes",
    },
  ],
});

// const usersSchema = new Schema({
//   name: String,
//   profileImg: String
// });

const artistLikes = new Schema({
  artist: {
    type: mongoose.ObjectId,
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
    type: mongoose.ObjectId,
    ref: "Projects",
  },
});

const Artist = mongoose.model("Artist", artistSchema);
const Projects = mongoose.model("Projects", projectSchema);
const ArtistLikes = mongoose.model("ArtistLikes", artistLikes);
// const Users = mongoose.model("Users", usersSchema);

module.exports = { Artist, Projects, ArtistLikes };
