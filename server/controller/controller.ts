const { Artist, Projects, ArtistLikes } = require("../models/events");
import { Request, Response, NextFunction } from 'express';

//Get Artists
exports.getArtists = async (req: Request, res: Response) => {
  try {
    const event = await Artist.find({});
    res.status(200);
    res.send(event);
  } catch (error) {
    console.log(error);
    res.status(500); // Internal server error
    res.send(error);
  }
};

//Post Artist
exports.addArtist = async (req, res) => {
  try {
    const event = await Artist.create(req.body);
    res.status(201);
    res.send(event);
    console.log(event);
  } catch (error) {
    console.log(error);
    res.status(500); // Internal server error
    res.send(error);
  }
};

//Get projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Projects.find().populate("artists");
    console.log({ projects });
    res.status(200);
    res.send(projects);
  } catch (error) {
    console.log(error);
    res.status(500); // Internal server error
    res.send(error);
  }
};

//Get one project
exports.getOneProject = async ({ params }, res) => {
  try {
    const { id } = params;
    const project = await ArtistLikes.find({ project: id });
    res.status(200);
    res.send(project);
  } catch (error) {
    console.log(error);
    res.status(500); // Internal server error
    res.send(error);
  }
};

//Post project
exports.addProject = async (req, res) => {
  try {
    const event = await Projects.create(req.body);
    res.status(201);
    res.send(event);
    console.log(event);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
};

//Update projects list
exports.putProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const artist = req.body;
    const filter = { _id: projectId };
    const artistLikes = await ArtistLikes.create({
      artist,
      project: projectId,
    });
    const updated = await Projects.findByIdAndUpdate(
      filter,
      { $push: { artists: artistLikes } },
      { new: true }
    );
    res.status(201);
    res.send(updated);
    console.log(updated);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
};

//Get projects
exports.getArtistLikes = async (req, res) => {
  try {
    const event = await ArtistLikes.find({});
    res.status(200);
    res.send(event);
  } catch (error) {
    console.log(error);
    res.status(500); // Internal server error
    res.send(error);
  }
};

//Update likes
exports.updateLikes = async ({ params }, res) => {
  try {
    const { id } = params;
    console.log(id);
    const artist = await ArtistLikes.findOneAndUpdate(
      { _id: id },
      { $inc: { numberOfLikes: 1 } },
      { new: true }
    );
    res.status(201);
    res.send(artist);
    console.log(artist);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
};

//Update Dislikes
exports.updateDislikes = async ({ params }, res) => {
  try {
    const { id } = params;
    console.log(id);
    const artist = await ArtistLikes.findOneAndUpdate(
      { _id: id },
      { $inc: { numberOfDislikes: 1 } },
      { new: true }
    );
    res.status(201);
    res.send(artist);
    console.log(artist);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
};
