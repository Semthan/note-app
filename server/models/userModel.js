const moongose = require('mongoose');

const Schema = moongose.Schema;

const userSchema = new Schema({
  name: { type: String, required: [true, 'Please add a name'] },
  email: { type: String, unique: true, required: [true, 'Please add a email'] },
  password: { type: String, required: [true, 'Please add a password'] },
}, {
  timestamps: true,
}
)

module.exports = moongose.model('User', userSchema);