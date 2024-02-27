const todomodel=require('../models/TodoModels')

module.exports.getToDo=async(req, res)=>{
    const toDo=await todomodel.find()
    res.send(toDo)
}
module.exports.saveToDo=async (req,res)=>{
    const {text}=req.body;
    todomodel
    .create({text})
    .then((data)=>{
        console.log("Added Successfully");
        console.log(data)
        res.send(data)
    

    })
   
}
module.exports.updatetodo=async(req,res)=>{
    const {_id,text}=req.body;
    todomodel
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.send("Updated successfully..."))
    .catch((err)=>console.log(err))
}
module.exports.deletetodo=async(req,res)=>{
    const {_id}=req.body;
    todomodel
    .findByIdAndDelete(_id)
    .then(()=>res.send("Deleted successfully..."))
    .catch((err)=>console.log(err))
}