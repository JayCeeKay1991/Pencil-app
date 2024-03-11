import { Request, Response } from 'express';
import  { Artist, Project, ArtistLikes, User } from "../models/events";
import { ArtistType, ProjectsType, ArtistLikesType } from "../models/events";
import bcrypt from 'bcrypt';

// USERS

// Login

exports.login = async (req:Request, res:Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    const validatedPass = await bcrypt.compare(password, user.password);
    if (!validatedPass) throw new Error();
    res.status(200)
    res.send(user);
  } catch (error) {
    res.status(401);
    res.send({ error: '401', message: 'Username or password is incorrect' });
  }
};

// ARTISTS

//Get Artists
export const getArtists = async (req:Request, res:Response) => {
  try {
    const event:ArtistType[] = await Artist.find({});
    res.status(200);
    res.send(event);
  } catch (error) {
    console.log(error);
    res.status(500); // Internal server error
    res.send(error);
  }
};

//Post Artist
export const addArtist = async (req:Request, res:Response) => {
  try {
    const newArtist:ArtistType = await Artist.create(req.body);
    res.status(201);
    res.send(newArtist);
  } catch (error) {
    console.log(error);
    res.status(500); // Internal server error
    res.send(error);
  }
};


// PROJECTS

//Get all projects
export const getProjects = async (req:Request, res:Response) => {
  try {
    const projects:ProjectsType[] = await Project.find()/* .populate("artists") */;
    console.log({ projects });
    res.status(200);
    res.send(projects);
  } catch (error) {
    console.log('error getting projects : ',error);
    res.status(500); // Internal server error
    res.send(error);
  }
};

//Post project
export const addProject = async (req:Request, res:Response) => {
  try {
    const event:ProjectsType = await Project.create(req.body);
    res.status(201);
    res.send(event);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
};



// ARTIST LIKES

//Get one project's Artist Likes
export const getOneProject = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;
    const project:ArtistLikesType[] = await ArtistLikes.find({ project: id });
    res.status(200);
    res.send(project);
  } catch (error) {
    console.log(error);
    res.status(500); // Internal server error
    res.send(error);
  }
};

// Add artist and artist likes to project PUT
export const putProject = async (req:Request, res:Response) => {
  try {
    const projectId:String = req.params.id;
    const artist:ArtistType = req.body;
    const filter = { _id: projectId };
    const artistLikes:ArtistLikesType = await ArtistLikes.create({
      artist,
      project: projectId,
    });
    const updated = await Project.findByIdAndUpdate(
      filter,
      { $push: { artists: artistLikes } },
      { new: true }
    );
    res.status(201);
    res.send(updated);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
};

//Get projects artist likes
export const getArtistLikes = async (req:Request, res:Response) => {
  try {
    const event:ArtistLikesType[] = await ArtistLikes.find({});
    res.status(200);
    res.send(event);
  } catch (error) {
    console.log(error);
    res.status(500); // Internal server error
    res.send(error);
  }
};

//Update likes
export const updateLikes = async (req:Request, res:Response) => {
try {
    const id = req.params.id;
    console.log(id);
    const artist = await ArtistLikes.findOneAndUpdate(
      { _id: id },
      { $inc: { numberOfLikes: 1 } },
      { new: true }
    );
    res.status(201);
    res.send(artist);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
};

//Update Dislikes
export const updateDislikes = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;
    console.log(id);
    const artist = await ArtistLikes.findOneAndUpdate(
      { _id: id },
      { $inc: { numberOfDislikes: 1 } },
      { new: true }
    );
    res.status(201);
    res.send(artist);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
};
