import { Router } from "express";
// import {getArtists, addArtist, getProjects, addProject, putProject, getOneProject, updateLikes, updateDislikes} from "./controller/controller";
import { getArtists, getProjects } from "./controller/controller";

const myRouter = Router();

myRouter.get("/artists", getArtists);
// myRouter.post("/artists", addArtist);

myRouter.get("/projects", getProjects);
myRouter.post("/projects", addProject);
// myRouter.put("/projects/:id", putProject);

// myRouter.get("/projects/artistLikes/:id", getOneProject);
// myRouter.put("/projects/artistLikes/like/:id", updateLikes);
// myRouter.put("/projects/artistLikes/dislike/:id", updateDislikes);

export default myRouter;
