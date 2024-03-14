import { Router } from "express";
import { login, getArtists, getArtist, getProjects, getProject, addProject, addArtistToProject, addLike, getLikes, addDislike, getDislikes} from "./controller/controller";


const myRouter = Router();


myRouter.post("/login", login)

myRouter.get("/artists", getArtists);
myRouter.get("/artist/:artistId", getArtist);


// //myRouter.post("/artists", addArtist);

myRouter.get("/projects", getProjects);
myRouter.get("/projects/:projectId", getProject);
myRouter.post("/projects", addProject);
myRouter.put("/projects/:projectId/:artistId", addArtistToProject);

myRouter.get("/likes/:projectId/:artistId", getLikes);
myRouter.post("/likes/:projectId/:artistId", addLike);

myRouter.get("/dislikes/:projectId/:artistId", getDislikes);
myRouter.post("/dislikes/:projectId/:artistId", addDislike);

myRouter.get("/projects/comments/:projectId/:artistId", getCommments);
myRouter.post("/projects/comments/:projectId/:artistId", addComment);



export default myRouter;
