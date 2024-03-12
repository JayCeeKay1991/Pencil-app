import { sequelize } from '../index'
import { DataTypes, Model } from 'sequelize'
import Artist from './Artist'
import Project from './Project'

interface DislikeAttributes {
    id: number,
    amount: number,
    createdAt: Date,
    updatedAt: Date,
}

class Dislike extends Model<DislikeAttributes> implements DislikeAttributes {
    public id!: number;
    public amount!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Dislike.init({
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
    modelName: 'Dislike'
})

// Define associations
Dislike.belongsTo(Artist, { foreignKey: 'artistId' });
Dislike.belongsTo(Project, { foreignKey: 'projectId' });

export default Dislike;