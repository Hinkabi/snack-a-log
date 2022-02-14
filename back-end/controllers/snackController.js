const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getOneSnack , deleteSnack, createSnack} = require("../queries/snacks.js");
const confirmHealth = require("../confirmHealth.js");

snacks.get("/", async (req, res) => {
  try {
    ;
    const allSnacks = await getAllSnacks();
    const test = {success: true, payload:allSnacks};
    if (allSnacks[0]) {
      res.status(200).json(test);
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
        const testId = {success: true, payload: snack};
        if(snack.id){
            res.status(200).json(testId);
            console.log(testId)
        } else {
            res.status(404).json({success:false, payload: "not found"});
        }
    }catch(err){
        console.log(err);
    }

});

snacks.post("/", async (req, res)=>{
    const { body } = req;
    body.is_healthy = confirmHealth(body)
    try{
        const createdSnack = await createSnack(body);
        const testPost = {success: true, payload: createdSnack}
        const capitalization = {success: true, payload: createdSnack.name}
        if(createdSnack.id){
            res.status(200).json(testPost);
        
        }else {
            res.status(500).json({error: "Snack creation error"});
        }
    } catch(err){
        console.log(err);
    }
})

snacks.delete("/:id",async(req,res)=>{
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  const testDelete = {success: true, payload: deletedSnack}
  if(deletedSnack.id){
      res.status(200).json(testDelete);
  }else{
      res.status(404).json({success:false, payload: "undefined" });
  }
})


module.exports = snacks;
