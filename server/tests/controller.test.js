"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("../src/router"));
const supertest_1 = __importDefault(require("supertest"));
const mongoose_1 = __importDefault(require("mongoose"));
const events_1 = require("../src/models/events");
const dbName = 'Test';
describe('Integration Tests', () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(router_1.default);
    const request = (0, supertest_1.default)(app);
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const url = `mongodb://127.0.0.1/${dbName}`;
        yield mongoose_1.default.connect(url);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield events_1.Project.deleteMany();
        yield events_1.Artist.deleteMany();
    }));
    it('should save a new project to the database', () => __awaiter(void 0, void 0, void 0, function* () {
        const testProject = {
            projectOwner: 'testprojectowner',
            description: 'test project description',
            projectName: 'testproject',
            startDate: '2024-03-20T23:32:00.000Z',
            endDate: '2024-03-17T23:32:00.000Z',
            thumbImage: 'testimageurl',
            artists: []
        };
        const res = yield request.post('/projects')
            .send(testProject);
        const project = yield events_1.Project.findOne({ projectName: 'testproject' });
        yield expect(project === null || project === void 0 ? void 0 : project.description).toBe('test project description');
    }));
});
