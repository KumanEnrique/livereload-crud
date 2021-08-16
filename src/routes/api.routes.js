const {Router} = require('express')
const router = Router()
const {getUsers,addUser,deleteUser,updateuser} = require('../controllers/api')

router.get('/',getUsers)
router.post('/add',addUser)
router.delete('/delete/:id',deleteUser)
router.put('/update/:id',updateuser)

module.exports = router