import { sequelize } from '../index'
import { DataTypes, Model } from 'sequelize'

interface WorkAttributes {
    id: number,
    description: string,
    image: string,
    createdAt: Date,
    updatedAt: Date,
    ArtistId: number,
}

class Work extends Model<WorkAttributes> implements WorkAttributes {
    public id!: number;
    public description!: string;
    public image!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
    public ArtistId!: number;
}

Work.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
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
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Work'
})


export default Work
