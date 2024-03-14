import { Request, Response } from 'express';
import { AppDataSource } from "../data-source";
import { Artist } from '../entity/Artist';
import { Project } from '../entity/Project';
import { User } from '../entity/User';
import { Like } from '../entity/Like';
import { Dislike } from '../entity/Dislike';

const myDataSource = AppDataSource;

// USERS


// POST LOGIN
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await myDataSource.manager.findOne(User, {
            where: {
                email: email
            }
        })
        if (user && user.email && user.password) {
            // const validatedPass = await bcrypt.compare(password, user.password);
            // if (!validatedPass) {
            //     res.status(401).json('Username or password is incorrect')
            // } else {
            res.status(200).json(user);
            // }
        } else {
            res.status(404).json('No user with those credentials found')
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(`An error occured logging in${error}`)
    }
}

// GET ALL ARTISTS
export const getArtists = async (req: Request, res: Response) => {
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

// GET ONE ARTIST
export const getArtist = async (req: Request, res: Response) => {
    try {
        const artists = await myDataSource.manager.find(Artist, {
            where: {
                id: parseInt(req.params.artistId)
            },
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
export const addArtistToProject = async (req: Request, res: Response) => {
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
        if (!artist || !project) {
            res.status(404).json('Project or artist not found');
        }
        else {
            // check for artists
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


//  PROJECTS

// GET ALL PROJECTS
export const getProjects = async (req: Request, res: Response) => {
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
export const getProject = async (req: Request, res: Response) => {
    const projectid = parseInt(req.params.projectId)
    try {
        const projects = await myDataSource.manager.findOne(Project, {
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
export const addProject = async (req: Request, res: Response) => {
    try {
        // check for existing project
        const project = await myDataSource.manager.find(Project, {
            where: {
                name: req.body.name
            }
        })
        if (project) {
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

// LIKES / DISLIKES

// POST NEW LIKE
export const addLike = async (req: Request, res: Response) => {
    const projectId = parseInt(req.params.projectId);
    const artistId = parseInt(req.params.artistId);
    const userId = parseInt(req.body.userId);
    try {
        const user = await myDataSource.manager.findOne(User, {
            where: {
                id: userId
            }
        })
        const artist = await myDataSource.manager.findOne(Artist, {
            where: {
                id: artistId
            }
        })
        const project = await myDataSource.manager.findOne(Project, {
            where: {
                id: projectId
            }
        })
        if (user && artist && project) {
            // check if a like already exists
            const existingLike = await myDataSource.manager.findOne(Like, {
                where: {
                    user: user,
                    artist: artist,
                    project: project,
                }
            });
            if (existingLike) {
                res.status(400).json({ message: 'Like already exists' });
            }
            else {
                // Create a new like
                const like = new Like();

                // Assign related entities directly
                like.user = user;
                like.artist = artist;
                like.project = project;

                // Save the new like
                await myDataSource.manager.save(like);
                return res.status(201).json("Like added successfully.");
            }

        }
    } catch (error) {
        console.error(error)
        res.status(500).json(`An error occured adding a like ${error}`)
    }
}

// GET LIKES FOR PROJECT AND ARTIST
export const getLikes = async (req: Request, res: Response) => {
    const projectId = parseInt(req.params.projectId);
    const artistId = parseInt(req.params.artistId);
    try {
            const likes = await myDataSource.manager.find(Like, {
                where: {
                    artist: {id: artistId },
                    project: {id: projectId }
                }
            })
            res.status(200).json(likes);
    } catch (error) {
        console.error(error);
        res.status(500).json(`An error occurred getting likes: ${error}`);
    }
}

// POST NEW DISLIKE
export const addDislike = async (req: Request, res: Response) => {
    const projectId = parseInt(req.params.projectId);
    const artistId = parseInt(req.params.artistId);
    const userId = parseInt(req.body.userId);
    try {
        const user = await myDataSource.manager.findOne(User, {
            where: {
                id: userId
            }
        })
        const artist = await myDataSource.manager.findOne(Artist, {
            where: {
                id: artistId
            }
        })
        const project = await myDataSource.manager.findOne(Project, {
            where: {
                id: projectId
            }
        })
        if (user && artist && project) {
            // check if a like already exists
            const existingLike = await myDataSource.manager.findOne(Dislike, {
                where: {
                    user: user,
                    artist: artist,
                    project: project,
                }
            });
            if (existingLike) {
                res.status(400).json({ message: 'Like already exists' });
            }
            else {
                // Create a new like
                const dislike = new Dislike();

                // Assign related entities directly
                dislike.user = user;
                dislike.artist = artist;
                dislike.project = project;

                // Save the new like
                await myDataSource.manager.save(dislike);
                return res.status(201).json("Dislike added successfully.");
            }

        }
    } catch (error) {
        console.error(error)
        res.status(500).json(`An error occured adding a like ${error}`)
    }
}

// GET DISLIKES FOR PROJECT AND ARTIST
export const getDislikes = async (req: Request, res: Response) => {
    const projectId = parseInt(req.params.projectId);
    const artistId = parseInt(req.params.artistId);
    try {
            const dislikes = await myDataSource.manager.find(Dislike, {
                where: {
                    artist: {id: artistId },
                    project: {id: projectId }
                }
            })
            res.status(200).json(dislikes);
    } catch (error) {
        console.error(error);
        res.status(500).json(`An error occurred getting dislikes: ${error}`);
    }
}





