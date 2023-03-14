const express = require('express')
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getallCategory,
} = require('../controller/prodcategoryCtrl')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const router = express.Router()

//Create new category
router.post('/', authMiddleware, isAdmin, createCategory)

//Update category
router.put('/:id', authMiddleware, isAdmin, updateCategory)

//Delete category (by id)
router.delete('/:id', authMiddleware, isAdmin, deleteCategory)

//Getting single category
router.get('/:id', getCategory)

//Getting all category
router.get('/', getallCategory)

module.exports = router
