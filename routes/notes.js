const express = require("express");
const router = express.Router();

const {
    createNote,
    getNotes,
} = require("../controllers/notes");

router.post("/create", createNote);
router.get("/GetNotes", getNotes);

module.exports = router;