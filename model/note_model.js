
function NoteModel(note) {
    this.note = note;
}

NoteModel.prototype.toJSON = function () {
    return { note: this.note };
}

module.exports = NoteModel;