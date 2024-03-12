import { sequelize } from '../index'
import { DataTypes, Model } from 'sequelize'
import Artist from './Artist'
import Project from './Project'

interface CommentAttributes {
    id: number,
    author: string,
    content: string,
    createdAt: Date,
    updatedAt: Date,
    ArtistId: number,
    ProjectId: number
}

class Comment extends Model<CommentAttributes> implements CommentAttributes {
    public id!: number;
    public author!: string;
    public content!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
    public ArtistId!: number;
    public ProjectId!: number;
}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    ArtistId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ProjectId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Comment'
})

// Define associations
Comment.belongsTo(Artist, { foreignKey: 'ArtistId' });
Comment.belongsTo(Project, { foreignKey: 'ProjectId' });

export default Comment