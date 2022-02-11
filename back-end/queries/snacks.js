const db = require("../db/dbConfig.js");

getAllSnacks = async () =>{
    try{
        const allSnacks = await db.any("SELECT * FROM snacks");
        return allSnacks;

    }catch(err){
        return err
    }
}

module.exports = {getAllSnacks};
