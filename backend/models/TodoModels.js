const mongoose=require('mongoose')
const todosSchema=new mongoose.Schema({
    text:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('ToDo',todosSchema)