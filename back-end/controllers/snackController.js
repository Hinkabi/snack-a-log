const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getOneSnack, deleteSnack } = require("../queries/snacks.js");

snacks.get("/", async (req, res) => {
  try {
    const allSnacks = await getAllSnacks();
    // console.log(allSnacks);
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
        // console.log(snack);
        if(snack.id){
            res.status(200).json(snack);
        } else {
            res.status(500).json({error: "Snack not found"});
        }
    }catch(err){
        console.log(err);
    }
})

snacks.delete("/:id",async(req,res)=>{
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if(deletedSnack.id){
      res.status(200).json(deletedSnack);
  }else{
      res.status(404).json({error:"Snack not found"});
  }
})

bookmarks.post("/", checkName, checkFavorite, async(req,res)=>{
  const { body } = req;
  // const { name, url, is_favorite, category } = req.body;
  try{
      const createdBookmark = await createBookmark(body);
      if(createdBookmark.id){
          res.status(200).json(createdBookmark);
      }else{
          res.status(500).json({error:"Bookmark creation error"});
      }
  }catch(err){
      console.log(err);
  }
}) 
module.exports = snacks;
