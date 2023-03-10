const mongoose = require('mongoose')

const validateDB = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id)
  if (!isValid) throw new Error('Id is invalid')
}
module.exports = validateDB
