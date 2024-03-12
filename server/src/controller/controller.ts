import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Artist, Project, Location, Skill, Like, Dislike, Comment, Work } from "../db/models";

// import  { Artist, Project, ArtistLikes } from "../models/events";

// ARTISTS

//Get Artists
export const getArtistsByProject = async (req: Request, res: Response) => {
    try {
        const artists = await Artist.findAll({
            where: {
                ProjectId: req.params.projectId
            }
        });
        res.status(200).json(artists);
    } catch (error) {
        console.error(error);
        res.status(500).json('ERROR');
    }
};


//Get Artists by project
export const getArtists = async (req: Request, res: Response) => {
    try {
        const artists = await Artist.findOne({
            include: [{
                model: Skill,
                as: 'mainSkill',
                attributes: ['id', 'name']
            },
            {
                model: Work,
                attributes: ['id', 'description', 'image']
            }]
        });
        res.status(200).json(artists);
    } catch (error) {
        res.status(500).json('Error retrieving Artists');
    }
};


// //Post Artist
// export const addArtist = async (req:Request, res:Response) => {
//   try {
//     const newArtist:ArtistType = await Artist.create(req.body);
//     res.status(201);
//     res.send(newArtist);
//   } catch (error) {
//     console.log(error);
//     res.status(500); // Internal server error
//     res.send(error);
//   }
// };


// // PROJECTS

//Get all projects
export const getProjects = async (req: Request, res: Response) => {
    try {
        const projects = await Project.findAll();
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json('Error retrieving Projects')
    }
}

// export const getProjects = async (req:Request, res:Response) => {
//   try {
//     const projects:ProjectsType[] = await Project.find()/* .populate("artists") */;
//     console.log({ projects });
//     res.status(200);
//     res.send(projects);
//   } catch (error) {
//     console.log('error getting projects : ',error);
//     res.status(500); // Internal server error
//     res.send(error);
//   }
// };

// //Post project
// export const addProject = async (req:Request, res:Response) => {
//   try {
//     const event:ProjectsType = await Project.create(req.body);
//     res.status(201);
//     res.send(event);
//   } catch (error) {
//     console.log(error);
//     res.status(500);
//     res.send(error);
//   }
// };



// // ARTIST LIKES

// // get all likes associated with artist and project
export const getLikes = async (req: Request, res: Response) => {
    try {
        const likes = await Like.findAll({
            where: {
                ArtistId: req.params.artistId,
                ProjectId: req.params.projectId
            }
        });
        res.status(200).json(likes);
    } catch (error) {
        console.error(error);
        res.status(500).json('ERROR');
    }
}


// add like
export const addLike = async (req: Request, res: Response) => {
    try {
        const like = await Like.findOrCreate(
            { where: {
                ArtistId: req.params.artistId,
                ProjectId: req.params.projectId
             }
            })
        like[0].amount++;
        await like[0].save()
        res.status(201).json(like[0]);
    } catch (error) {
        res.status(500)
    }
}

// ARTIST DISLIKES

// // get all dislikes associated with artist and project
export const getDislikes = async (req: Request, res: Response) => {
    try {
        const likes = await Dislike.findAll({
            where: {
                ArtistId: req.params.artistId,
                ProjectId: req.params.projectId
            }
        });
        res.status(200).json(likes);
    } catch (error) {
        console.error(error);
        res.status(500).json('ERROR');
    }
}

// add dislike
export const addDislike = async (req: Request, res: Response) => {
    try {
        const dislike = await Dislike.findOrCreate(
            { where: {
                ArtistId: req.params.artistId,
                ProjectId: req.params.projectId
             }
            })
        dislike[0].amount++;
        await dislike[0].save()
        res.status(201).json(dislike[0]);
    } catch (error) {
        res.status(500)
    }
}

// COMMENTS

// // get all dislikes associated with artist and project
export const getCommments = async (req: Request, res: Response) => {
    try {
        const comments = await Comment.findAll({
            where: {
                ArtistId: req.params.artistId,
                ProjectId: req.params.projectId
            }
        });
        res.status(200).json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json('ERROR');
    }
}

// add dislike
export const addComment = async (req: Request, res: Response) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    } catch (error) {
        res.status(500)
    }
}



