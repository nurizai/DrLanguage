const express = require('express')
const router = express.Router()

// Load Doctor model
const Doctor = require('../models/Doctor')

// Get all doctors
router.get('/', (req, res) => {
  Doctor.find()
    .then(doctors => res.json(doctors))
    .catch(err => res.json(err))
})

// Post doctor to DB
router.post('/', (req, res) => {
  const newDoctor = new Doctor({
    name: req.body.name,
    specialist: req.body.specialist,
    description: req.body.description,
    address: req.body.address,
    tags: req.body.tags,
    photo: req.body.photo,
    location: req.body.location,
    isBookmarked: false,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber
  })

  newDoctor.save()
    .then(doctor => res.json(doctor))
    .catch(err => res.json(err))
})

// Delete doctor
router.delete('/:id', (req, res) => {
  Doctor.findByIdAndDelete(req.params.id)
    .then(doctor => res.json(doctor))
    .catch(err => res.json(err))
})

// Edit card
router.patch('/:id', (req, res) => {
  Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(doctor => res.json(doctor))
    .catch(err => res.json(err))
})

module.exports = router