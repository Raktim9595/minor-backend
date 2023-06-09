const express = require("express")
const router = express.Router()
const { userregisters, signIn,signout, userlist, singleuser, deleteuser, updateuser } = require("../Controller/usercontrol")
const {storage} = require('../utlis/cloudinary')
const multer = require('multer')
const upload = multer({storage})
const { registerationvalidation } = require("../validation")
const { verifyTokenAndUser } = require("../middleware/verifytoken")
router.post("/register",upload.single("image"),userregisters)
router.post('/signin',signIn)
router.post('/signout',signout)
router.get('/user',userlist)
router.get('/user/:id', verifyTokenAndUser,singleuser)
router.put('/updateuser/:id',upload.single('image'),verifyTokenAndUser,updateuser)
router.delete('/deleteuser/:id',verifyTokenAndUser,deleteuser)
module.exports = router;