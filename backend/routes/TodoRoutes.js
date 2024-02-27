const {Router}=require('express');
const { getToDo, saveToDo, updatetodo, deletetodo } = require('../controllers/TodoControler');
const router=Router()

// router.get('/',(req,res)=>{
//     res.json({message:"hi there..."})
// })

router.get('/',getToDo)
router.post('/save',saveToDo)
router.post('/update',updatetodo)
router.post('/delete',deletetodo)

module.exports=router;