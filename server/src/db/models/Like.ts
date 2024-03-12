import { sequelize } from '../index'
import { DataTypes, Model } from 'sequelize'
import Artist from './Artist'
import Project from './Project'

interface LikeAttributes {
    id: number,
    amount: number,
    createdAt: Date,
    updatedAt: Date,
    ArtistId: number,
    ProjectId: number
    

}

class Like extends Model<LikeAttributes> implements LikeAttributes {
    public id!: number;
    public amount!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
    public ArtistId!: number;
    public ProjectId!: number;
   
}

Like.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
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
    modelName: 'Like'
})

Like.belongsTo(Artist, { foreignKey: 'ArtistId' });
Like.belongsTo(Project, { foreignKey: 'ProjectId' });

export default Like