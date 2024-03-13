import { Request, Response } from 'express';
import { AppDataSource } from "../data-source";
import { Artist } from '../entity/Artist';
import { Project } from '../entity/Project';

const myDataSource = AppDataSource;



// GET ALL ARTISTS
export const getArtists = async (req: Request, res: Response ) => {
    try {
        const artists = await myDataSource.manager.find(Artist, {
            relations: {
                skills: true,
                work: true,
                location: true,
            }
        });
        res.status(200).json(artists)
    } catch (error) {
        console.error(error);
        res.status(500).json(`An error occured getting all artists ${error}`)
    }
}

// PUT ARTIST TO PROJECT 
export const addArtistToProject = async (req: Request, res: Response ) => {
    const artistid = parseInt(req.params.artistId);
    const projectid = parseInt(req.params.projectId)
    try {
        // retrieve artist and project
        const artist = await myDataSource.manager.findOne(Artist, {
            where: {
                id: artistid
            }
        })
        const project = await myDataSource.manager.findOne(Project, {
            where: {
                id: projectid
            }
        })
        if(!artist || !project) {
            res.status(404).json('Project or artist not found');
        }
        else {
            if (!project.artists) {
                project.artists = []; 
            }
            project.artists.push(artist);
            await myDataSource.manager.save(project)
            res.status(201).json(project);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(`An error occured adding an artist to a project ${error}`)
    }
} 


// GET ALL ARTISTS FOR A PROJECT

// //Get Artists by project
// export const getArtists = async (req: Request, res: Response) => {
//     try {
//         const artists = await Artist.findOne({
//             include: [{
//                 model: Skill,
//                 as: 'mainSkill',
//                 attributes: ['id', 'name']
//             },
//             {
//                 model: Work,
//                 attributes: ['id', 'description', 'image']
//             }]
//         });
//         res.status(200).json(artists);
//     } catch (error) {
//         res.status(500).json('Error retrieving Artists');
//     }
// };


// // //Post Artist
// // export const addArtist = async (req:Request, res:Response) => {
// //   try {
// //     const newArtist:ArtistType = await Artist.create(req.body);
// //     res.status(201);
// //     res.send(newArtist);
// //   } catch (error) {
// //     console.log(error);
// //     res.status(500); // Internal server error
// //     res.send(error);
// //   }
// // };


//  PROJECTS

// GET ALL PROJECTS
export const getProjects = async (req: Request, res: Response ) => {
    try {
        const projects = await myDataSource.manager.find(Project, {
            relations: {
                artists: true,
            }
        });
        res.status(200).json(projects)
    } catch (error) {
        console.error(error);
        res.status(500).json(`An error occured getting all projects ${error}`)
    }
}

// GET ONE PROJECT
export const getProject = async (req: Request, res: Response ) => {
    console.log(req.params.projectId)
    const projectid = parseInt(req.params.projectId)
    try {
        const projects = await myDataSource.manager.find(Project, {
            where: {
                id: projectid
            },
            relations: {
                artists: true,
            }
        });
        res.status(200).json(projects)
    } catch (error) {
        console.error(error);
        res.status(500).json(`An error occured getting all projects ${error}`)
    }
}

// POST NEW PROJECT
export const addProject = async (req: Request, res: Response ) => {
    try {
        // check for existing project
        const project = await myDataSource.manager.find(Project,{
            where: {
                name: req.body.name
            }
        })
        if(project) {
            res.status(409).json('A project with that name already exists')
        }
        else {
            const newProject = await myDataSource.manager.create(Project, req.body)
            res.status(201).json(newProject);
        }
    } catch (error) {
        console.error(error)
        res.status(500).json(`An error occured adding a new project ${error}`)
    }
}



