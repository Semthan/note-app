const moongose = require('mongoose');

const Schema = moongose.Schema;

const noteSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
}, {
  timestamps: true,
});

module.exports = moongose.model('Note', noteSchema);

