const db = require("../db/dbConfig.js");

getAllSnacks = async () =>{
    try{
        const allSnacks = await db.any("SELECT * FROM snacks");
        return allSnacks;

    }catch(err){
        return err
    }
}

getOneSnack = async(id)=>{
    try{
        const oneSnack = await db.one("SELECT * FROM snacks WHERE id= $1", id);
        return oneSnack;
    }catch(err){
        return err
    }
}

const deleteSnack = async(id)=>{
    try{
         const deletedSnack = await db.one(
             "DELETE FROM snacks WHERE id=$1 RETURNING *",
             id
         );
         return deletedSnack;
    }catch(err){
        return err;
    }
 }

module.exports = {getAllSnacks, getOneSnack, deleteSnack};
