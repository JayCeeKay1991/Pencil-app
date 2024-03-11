import { sequelize } from '../index'
import { DataTypes, Model } from 'sequelize'
import Artist from './Artist'
import Project from './Project'

interface LikeAttributes {
    id: number,
    amount: number,
    createdAt: Date,
    updatedAt: Date,
}

class Like extends Model<LikeAttributes> implements LikeAttributes {
    public id!: number;
    public amount!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
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
    }
}, {
    sequelize,
    modelName: 'Like'
})

// Define associations
Like.belongsTo(Artist, { foreignKey: 'artistId' });
Like.belongsTo(Project, { foreignKey: 'projectId' });

export default Like