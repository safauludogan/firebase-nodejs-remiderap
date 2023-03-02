const express = require("express");
const router = express.Router();

const {
    createNote,
} = require("../controllers/notes");

router.post("/create", createNote);

module.exports = router;