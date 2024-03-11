import { sequelize } from "../index"
import { DataTypes, Model } from "sequelize"
import Artist from "./Artist"


interface SkillAttributes {
    id: number,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    // poss category
}


class Skill extends Model<SkillAttributes> implements SkillAttributes {
    public id!: number;
    public name!: string;
    public createdAt!: Date;
    public updatedAt!: Date;

    // associated artists
    public readonly artists?: Artist[];
}

Skill.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
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
    }
}, {
    sequelize,
    modelName: 'Skill'
})


export default Skill