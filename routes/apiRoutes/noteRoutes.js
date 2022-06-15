const fs = require("fs");
const router = require("express").Router();
const notes = require("../../db/db.json");
const generateUniqueId = require("generate-unique-id");
const path = require("path");

//Get route
router.get("/notes", (req, res) => {
  res.status(200).json(notes);
});

//Post route
router.post("/notes", (req, res) => {
  const newNote = req.body;
  const id = generateUniqueId();
  newNote.id = id;
  notes.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(notes)
  );
  res.status(200).send("New note created!");
});

// Delete route
//router.delete("/notes", (req, res) => {
//     fs.writeFileSync(

//     );
// });

module.exports = router;