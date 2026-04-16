let express=require('express');
let router=express.Router();
let User=require('../models/mongoose.model');
const { insrt,showall,deldata,updateData, getone} = require('../controls/contrl');

router.post('/insrt',insrt);
router.get('/showall', showall);
router.delete('/deldata/:roll', deldata);
router.put('/updateData/:roll', updateData);
router.get('/getone/:roll', getone);


module.exports=router;
