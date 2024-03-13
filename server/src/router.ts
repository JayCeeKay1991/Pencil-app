import { Router } from "express";
import { getArtists, getProjects } from "./controller/controller";


const myRouter = Router();

myRouter.get("/artists", getArtists);
// myRouter.get("/artists/:projectId", getArtistsByProject);

// //myRouter.post("/artists", addArtist);

myRouter.get("/projects", getProjects);
// // myRouter.post("/projects", addProject);
// // myRouter.put("/projects/:id", putProject);

// myRouter.get("/likes/:projectId/:artistId", getLikes);
// myRouter.put("/likes/:projectId/:artistId", addLike);

// myRouter.get("/dislikes/:projectId/:artistId", getDislikes);
// myRouter.put("/dislikes/:projectId/:artistId", addDislike);

// myRouter.get("/projects/comments/:projectId/:artistId", getCommments);
// myRouter.post("/projects/comments/:projectId/:artistId", addComment);



export default myRouter;
