const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getOneSnack , deleteSnack, createSnack} = require("../queries/snacks.js");

snacks.get("/", async (req, res) => {
  try {
    const allSnacks = await getAllSnacks();
    // console.log(allSnacks)
    if (allSnacks[0]) {
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

});

snacks.delete("/:id", async(req, res)=>{
    const { id } = req.params;
    const deletedSnack = await deleteSnack(id);
    if(deletedSnack.id){
        res.status(200).json(deletedSnack);
    } else {
        res.status(404).json({error: "Snack not found"});
    }
});

snacks.post("/", async (req, res)=>{
    const { body } = req;
    try{
        const createdSnack = await createSnack(body);
        if(createdSnack.id){
            res.status(200).json(createdSnack);
        } else {
            res.status(500).json({error: "Snack creation error"});
        }
    } catch(err){
        console.log(err);
    }
})



module.exports = snacks;
