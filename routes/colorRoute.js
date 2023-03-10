const express = require('express')
const {
  createDosageForm,
  updateDosageForm,
  deleteDosageForm,
  getDosageForm,
  getallDosageForm,
} = require('../controller/dosFormController')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const router = express.Router()

router.post('/', authMiddleware, isAdmin, createDosageForm)
router.put('/:id', authMiddleware, isAdmin, updateDosageForm)
router.delete('/:id', authMiddleware, isAdmin, deleteDosageForm)
router.get('/:id', getDosageForm)
router.get('/', getallDosageForm)

module.exports = router
