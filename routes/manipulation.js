const express=require('express');
const router=express.Router();
const operations=require('../controllers/manipulation-controller');
router.post('/add-task/',operations.createTask);
router.post('/del-task/',operations.delTask);
router.get('/StatusUpdate/',operations.setStatus);
module.exports=router;
