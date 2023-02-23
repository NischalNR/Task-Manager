const { Router } = require("express")
const express=require("express")
const { getTasks, createTask,getTask ,updateTask,deleteTask,}=require("../controllers/taskController")

let router=express.Router()

//route.get("/",getTasks,)
//route.post("/",createTask)
// route.get("/:id",getTask)
// route.put("/:id",updateTask)
// route.delete("/:id",deleteTask);

router.route("/").post(createTask).get(getTasks);
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);


module.exports=router


