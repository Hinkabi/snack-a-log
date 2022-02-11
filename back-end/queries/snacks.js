const db = require("../db/dbConfig.js");

getAllSnacks = async () =>{
    try{
        const allSnacks = await db.any("SELECT * FROM snacks");
        return allSnacks;

    }catch(err){
        return err
    }
}

getOneSnack = async (id) =>{
    try{
        const oneSnack = await db.one("SELECT * snacks WHERE id  =$1", id);
        return oneSnack;
    }catch(err){
        return err
    }
}

module.exports = {getAllSnacks, getOneSnack};
