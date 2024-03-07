const myRouter = require("express").Router();
const controller = require("./controller/controller");

myRouter.get("/artists", controller.getArtists);
myRouter.post("/artists", controller.addArtist);

myRouter.get("/projects", controller.getProjects);
myRouter.post("/projects", controller.addProject);
myRouter.put("/projects/:id", controller.putProject);

myRouter.get("/projects/artistLikes/:id", controller.getOneProject);
myRouter.put("/projects/artistLikes/like/:id", controller.updateLikes);
myRouter.put("/projects/artistLikes/dislike/:id", controller.updateDislikes);

module.exports = myRouter;
