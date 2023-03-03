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

exports.getNotes = async (req, res) => {
    const snapshot = await firestore.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).send(list);
};

exports.updateNote = async (req, res) => {
    const id = req.body.id;
    const data = req.body;
    await firestore.doc(id).update(data);
    res.status(200).send({ msg: "Not güncellendi" });
};