const firestore = require('../config/firestore_config');
const ErrorHandling = require('../utils/error_handling');
const NoteModel = require('../model/note_model.js');

exports.createNote = async (req, res) => {
    if (!req.body.note) {
        return res.status422({ message: "Not giriniz" });
    }
    const data = req.body;
    const noteModel = new NoteModel(data.note);

    console.log(noteModel.toJSON());
    await firestore.add(noteModel.toJSON())
        .then(function (data) {
            res.status(200).send({
                message: "Not eklendi"
            });
        }).catch(function (error) {
            new ErrorHandling().getResponse(error, res);
        });
}; 