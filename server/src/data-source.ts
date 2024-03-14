import "reflect-metadata"
import { DataSource} from "typeorm"
import { Artist } from "./entity/Artist"
import { Project } from "./entity/Project"
import { Skill } from "./entity/Skill"
import { Location } from "./entity/Location"
import { Work } from "./entity/Work"
import { User } from "./entity/User"
import { Like } from "./entity/Like"
import { Dislike } from "./entity/Dislike"
import { Comment } from "./entity/Comment"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "127.0.01",
    port: 5432,
    username: "strasseneck",
    password: "pandemonium",
    database: "pencil",
    synchronize: true,
    logging: false,
    entities: [User, Artist, Project, Skill, Location, Work, Like, Dislike, Comment],
    migrations: [],
    subscribers: [],
})
