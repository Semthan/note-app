const moongose = require('mongoose');

const Schema = moongose.Schema;

const noteSchema = new Schema({
  user: { type: moongose.Schema.Types.ObjectId, required: true, ref: 'User' },
  title: { type: String, required: [true, 'Please add a title'] },
  content: { type: String, required: [true, 'Please add a content'] }
}, {
  timestamps: true,
});

module.exports = moongose.model('Note', noteSchema);

