const express = require("express");
const router = express.Router();

const {
    createNote,
    getNotes,
    updateNote,
    deleteNote,
} = require("../controllers/notes");

router.post("/create-note", createNote);
router.get("/get-notes", getNotes);
router.post("/update-note", updateNote);
router.delete("/delete-note", deleteNote);

module.exports = router;