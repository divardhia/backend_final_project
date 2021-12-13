import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Vocab = db.define('vocab', {
    gambar:{
        type: DataTypes.STRING
    },
    bindo:{
        type: DataTypes.STRING
    },
    bing:{
        type: DataTypes.STRING
    },
    kategori:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

export default Vocab;