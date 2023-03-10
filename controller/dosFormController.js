const DosageForm = require('../models/dosFormModel')
const asyncHandler = require('express-async-handler')
const validateDB = require('../utils/validateDB')

const createDosageForm = asyncHandler(async (req, res) => {
  try {
    const newDosageForm = await DosageForm.create(req.body)
    res.json(newDosageForm)
  } catch (error) {
    throw new Error(error)
  }
})
const updateDosageForm = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateDB(id)
  try {
    const updatedDosageForm = await DosageForm.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.json(updatedDosageForm)
    w
  } catch (error) {
    throw new Error(error)
  }
})
const deleteDosageForm = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateDB(id)
  try {
    const deletedDosageForm = await DosageForm.findByIdAndDelete(id)
    res.json(deletedDosageForm)
  } catch (error) {
    throw new Error(error)
  }
})
const getDosageForm = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateDB(id)
  try {
    const getaDosageForm = await DosageForm.findById(id)
    res.json(getaDosageForm)
  } catch (error) {
    throw new Error(error)
  }
})
const getallDosageForm = asyncHandler(async (req, res) => {
  try {
    const getallDosageForm = await DosageForm.find()
    res.json(getallDosageForm)
  } catch (error) {
    throw new Error(error)
  }
})
module.exports = {
  createDosageForm,
  updateDosageForm,
  deleteDosageForm,
  getDosageForm,
  getallDosageForm,
}
