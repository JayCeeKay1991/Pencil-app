import { sequelize } from '../index'
import { DataTypes, Model } from 'sequelize'
import Artist from './Artist'

interface ProjectAttributes {
    id: number,
    owner: string,
    createdAt: Date,
    updatedAt: Date,
    description: string,
    name: string,
    startDate: Date,
    endDate: Date,
    thumbImage: string
}

class Project extends Model<ProjectAttributes> implements ProjectAttributes {
    public id!: number;
    public owner!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
    public description!: string;
    public name!: string;
    public startDate!: Date;
    public endDate!: Date;
    public thumbImage!: string;

    // Define association with Artist
    public readonly artists?: Artist[];
}

Project.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    owner: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    thumbImage: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Project'
});

// Associations

// Project.belongsToMany(Artist, { through: 'ProjectArtist' });
// Artist.belongsToMany(Project, { through: 'ProjectArtist' });


export default Project;
