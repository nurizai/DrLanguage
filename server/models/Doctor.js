const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DoctorSchema = new Schema({
  name: String,
  specialist: String,
  description: String,
  address: String,
  tags: Array,
  photo: String,
  location: String,
  isBookmarked: Boolean,
  email: String,
  phoneNumber: String,
  longitude: Number,
  latitude: Number
})

const Doctor = mongoose.model('Doctor', DoctorSchema)
module.exports = Doctor