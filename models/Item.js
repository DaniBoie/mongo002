const { model, Schema } = require('mongoose')

const Item = new Schema({
  text: {
    type: String,
    unique: true,
    required: true
  },
  isDone: {
    type: Boolean,
    require: true
  }
}, {timestamps: true})

module.exports = model('Item', Item)