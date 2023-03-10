const express = require('express')
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
  getAllOrders,
  adminLogin,
} = require('../controller/userCtrl')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const router = express.Router()

//reset password token
router.put('/reset-password/:token', resetPassword)

//user & admin route
router.post('/register', createUser)
router.put('/password', authMiddleware, updatePassword)
router.post('/login', loginUserCtrl)
router.post('/admin-login', adminLogin)
router.post('/forgot-password-token', forgotPasswordToken)
router.post('/cart', authMiddleware, userCart)
router.post('/cart/applycoupon', authMiddleware, applyCoupon)
router.post('/cart/cash-order', authMiddleware, createOrder)
router.get('/get-orders', authMiddleware, getOrders)
router.delete('/empty-cart', authMiddleware, emptyCart)
router.get('/wishlist', authMiddleware, getWishlist)
router.get('/refresh', handleRefreshToken)
router.get('/logout', logout)

//admin authority
router.post('/getorderbyuser/:id', authMiddleware, isAdmin, getAllOrders)
router.get('/:id', authMiddleware, isAdmin, getaUser)
router.get('/getallorders', authMiddleware, isAdmin, getAllOrders)
router.get('/all-users', getallUser)
router.get('/cart', authMiddleware, getUserCart)
router.delete('/:id', deleteUser)
router.put('/order/update-order/:id', authMiddleware, isAdmin, updateOrderStatus)
router.put('/edit-user', authMiddleware, updatedUser)
router.put('/save-address', authMiddleware, saveAddress)
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser)
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser)

module.exports = router
