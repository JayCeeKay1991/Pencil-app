import { Router } from "express";
// import {getArtists, addArtist, getProjects, addProject, putProject, getOneProject, updateLikes, updateDislikes} from "./controller/controller";
import { getArtists, getProjects, getLikes, addLike, getDislikes, addDislike, getCommments, addComment } from "./controller/controller";

const myRouter = Router();

myRouter.get("/artists", getArtists);
// myRouter.post("/artists", addArtist);

myRouter.get("/projects", getProjects);
// myRouter.post("/projects", addProject);
// myRouter.put("/projects/:id", putProject);

myRouter.get("/likes/:projectId/:artistId", getLikes);
myRouter.put("/likes/:projectId/:artistId", addLike);

myRouter.get("/dislikes/:projectId/:artistId", getDislikes);
myRouter.put("/dislikes/:projectId/:artistId", addDislike);

// myRouter.put("/projects/artistLikes/dislike/:id", updateDislikes);

myRouter.get("/projects/comments/:projectId/:artistId", getCommments);
myRouter.post("/projects/comments/:projectId/:artistId", addComment);



export default myRouter;
