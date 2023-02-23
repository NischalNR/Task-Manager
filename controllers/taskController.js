const { deleteOne } = require("../models/Task")
const taskModel=require("../models/Task")

const  getTasks=async(req,res)=>{
  let data=await taskModel.find().lean()
  console.log(data)
  res.render("home",{data})
}


const createTask=async(req,res)=> {
  let payload ={
    task:await req.body.task
  }
  console.log(payload);
  await taskModel.create(payload)
  res.redirect("/tasks")
}


 const getTask=async(req,res)=> {
  let id=await req.params.id
  let updatedata=await taskModel.findOne({_id:id}).lean()
  console.log(updatedata)
   res.render("edit",{updatedata})
 }


const updateTask=async(req,res)=> {
  let payload={task:await req.body.task,
  text:await req.body.text}
  await taskModel.updateOne({_id:req.params.id},{$set:payload})

  res.redirect("/tasks")
}

const deleteTask=async(req,res)=>{
  await taskModel.deleteOne({_id:req.params.id})
  res.redirect("/tasks")
 }


module.exports={createTask,getTasks,getTask,updateTask,deleteTask}