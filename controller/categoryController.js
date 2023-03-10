const Category = require('../models/categoryModel.js')
const asyncHandler = require('express-async-handler')
const validateDB = require('../utils/validateDB')

//create new category
const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await Category.create(req.body)
    res.json(newCategory)
  } catch (error) {
    throw new Error(error)
  }
})

//update category
const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateDB(id)
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.json(updatedCategory)
  } catch (error) {
    throw new Error(error)
  }
})

//delete category
const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateDB(id)
  try {
    const deletedCategory = await Category.findByIdAndDelete(id)
    res.json(deletedCategory)
  } catch (error) {
    throw new Error(error)
  }
})

//get single category
const getCategory = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateDB(id)
  try {
    const getaCategory = await Category.findById(id)
    res.json(getaCategory)
  } catch (error) {
    throw new Error(error)
  }
})

//get all category
const getallCategory = asyncHandler(async (req, res) => {
  try {
    const getallCategory = await Category.find()
    res.json(getallCategory)
  } catch (error) {
    throw new Error(error)
  }
})
module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getallCategory,
}
