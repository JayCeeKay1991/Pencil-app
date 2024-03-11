import { sequelize } from '../index'
import { DataTypes, Model } from 'sequelize'
import Skill from './Skill'
import Location from './Location'

interface ArtistAttributes {
    id: number,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    profileImg: string,
    rateAmount: number,
    rateType: string,
    rateCurrency: string,
    mainSkillId: number
}

class Artist extends Model<ArtistAttributes> implements ArtistAttributes {
    public id!: number;
    public name!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
    public profileImg!: string;
    public rateAmount!: number;
    public rateType!: string;
    public rateCurrency!: string;
    public mainSkillId!: number; 

    // associated location, rate, main skill and skills
    public readonly location!: Location;
    public readonly mainSkill!: Skill;
    public readonly skills?: Skill[];
}

Artist.init({
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
    profileImg: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rateAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    rateType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rateCurrency: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mainSkillId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Skill,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Artist'
});


// Add association for main skill
Skill.belongsTo(Artist, { as: 'mainSkill', foreignKey: 'mainSkillId' });

export default Artist