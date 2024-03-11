import { sequelize } from "./index";
import { Artist, Project, Location, Skill, Like, Dislike, Comment} from "./models";


// Define associations
async function createAssociations() {
    try {
        Skill.belongsToMany(Artist, { through: 'ArtistSkill' });
        Artist.belongsToMany(Skill, { through: 'ArtistSkill' });
        Location.belongsToMany(Artist, { through: 'ArtistLocation' });
        Artist.belongsToMany(Location, { through: 'ArtistLocation' });
        Project.belongsToMany(Artist, { through: 'ProjectArtist' });
        Artist.belongsToMany(Project, { through: 'ProjectArtist' });
    } catch (error) {
        console.error('Error creating associations:', error);
    }
}

// Synchronizes the db and creates tables, just for development
export async function syncDb() {
    try {
        await sequelize.sync({ alter: true });
        await Comment.sync();
        await Like.sync();
        await Dislike.sync();
        await createAssociations();
        console.log("Database synchronization completed.");
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
}
