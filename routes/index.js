const express=require('express');
const router=express.Router();
const db=require('../config/mongoose');
const homeControl=require('../controllers/home-controller');
router.get('/',homeControl.display);
router.use('/manipulation',require('./manipulation'));
module.exports=router;
