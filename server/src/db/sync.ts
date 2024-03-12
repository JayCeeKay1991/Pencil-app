import { sequelize } from "./index";
import { Artist, Project, Location, Skill, Like, Dislike, Comment, Work} from "./models";


// Define associations
async function createAssociations() {
    try {
        Skill.belongsToMany(Artist, { through: 'ArtistSkill' });
        Artist.belongsToMany(Skill, { through: 'ArtistSkill' });
        Location.belongsToMany(Artist, { through: 'ArtistLocation' });
        Artist.belongsToMany(Location, { through: 'ArtistLocation' });
        Project.belongsToMany(Artist, { through: 'ProjectArtist' });
        Artist.belongsToMany(Project, { through: 'ProjectArtist' });
        Artist.belongsTo(Skill, { foreignKey: 'mainSkillId', as: 'mainSkill' });
        Artist.hasMany(Work, { constraints: true, onDelete: 'CASCADE'});
        Work.belongsTo(Artist);
    } catch (error) {
        console.error('Error creating associations:', error);
    }
}

// Synchronizes the db and creates tables, just for development
export async function syncDb() {
    try {
        await sequelize.sync({ alter: true });
        await createAssociations();
        await Comment.sync();
        await Like.sync();
        await Dislike.sync();
        console.log("Database synchronization completed.");
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
}
