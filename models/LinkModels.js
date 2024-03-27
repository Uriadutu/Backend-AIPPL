import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;
const Kuisioner = db.define("Kuisioner", {
    id_kui : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true,
        allowNull: false,
        validate: {
        notEmpty: true,
    },
    
    },
    Linkkui : {
        type : DataTypes.STRING,
    }
}, {
    freezeTableName : true
})

export default Kuisioner;