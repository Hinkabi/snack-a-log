const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getOneSnack } = require("../queries/snacks.js");

snacks.get("/", async (req, res) => {
  try {
    const allSnacks = await getAllSnacks();
    // console.log(allSnacks)
    if (allSnacks[0]) {
        console.log(allSnacks);
      res.status(200).json(allSnacks);
    } else {
      res.status(500).json({ error: "server error" });
    }
  } catch (err) {
    return err;
  }
});

snacks.get("/:id", async (req,res) =>{
    const { id } = req.params;
    try{
        const snack = await getOneSnack(id);
        if(snack.id){
            res.status(200).json(snack);
        } else {
            res.status(500).json({error: "Snack not found"});
        }
    }catch(err){
        console.log(err);
    }

})



module.exports = snacks;
