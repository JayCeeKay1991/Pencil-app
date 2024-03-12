import { sequelize } from "../index"
import { DataTypes, Model } from "sequelize"
import Artist from "./Artist"

interface LocationAttributes {
    id: number,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    // poss actual location co-ordinates for map integration
}


class Location extends Model<LocationAttributes> implements LocationAttributes {
    public id!: number;
    public name!: string;
    public createdAt!: Date;
    public updatedAt!: Date;

    // associated artists
    public readonly artists?: Artist[];
}

Location.init({
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
    modelName: 'Location'
})

// // Assocations
// Artist.belongsToMany(Location, { through: 'ArtistLocation' });
// Location.belongsToMany(Artist, { through: 'ArtistLocation' });


export default Location