import express from 'express';
import myRouter from '../router';
import supertest from 'supertest';
import mongoose from 'mongoose';
import { Artist, Project } from '../models/events'


describe ('Controller', () => {
    const app  = express();
    app.use(express.json());
    app.use(myRouter);
    const request = supertest(app);

    beforeAll (async () => {
        await mongoose.connection.close()
        const url = `mongodb://127.0.0.1/test`;
        await mongoose.connect(url);
    });

    afterEach (async () => {
        await Project.deleteMany();
        await Artist.deleteMany();
    })

    it('should save a new project to the database', async () => {
        const testProject = {
           projectOwner: 'testprojectowner',
           description:  'test project description',
           projectName: 'testproject',
           startDate: '2024-03-20T23:32:00.000Z',
           endDate: '2024-03-17T23:32:00.000Z',
           thumbImage: 'testimageurl',
           artists: []
        };
        await request.post('/projects',)
        .send(testProject);

        const project = await Project.findOne({projectName: 'testproject'})
        await expect (project?.description).toBe('test project description');
        return;

    })

    
})

