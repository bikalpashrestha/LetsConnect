const router = require('express').Router()
const authCtrl = require('../controllers/authCtrl')



router.post('/login', authCtrl.login)
router.post('/logout', authCtrl.logout)


module.exports = router