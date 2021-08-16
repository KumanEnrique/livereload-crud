const {Router} = require('express')
const router = Router()
const {getUsers,formUser,addUser,deleteUser,updateUser} = require('../controllers/view')

router.get('/list',getUsers)
router.get('/form',formUser)
router.post('/add',addUser)
router.get('/delete/:id',deleteUser)
router.post('/update/:id',updateUser)
module.exports = router