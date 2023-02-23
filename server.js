if(process.env.NODE_ENV!=="production"){
  require("dotenv").config()
}



const express=require("express")
const mongoose=require("mongoose")
const method=require("method-override")
const {engine}=require("express-handlebars")
const taskRouter=require("./routers/taskRouter")
let app=express()

app.use(method("_method"))
mongoose.set('strictQuery',true)
mongoose.connect(process.env.MONGODB_URI,(err)=>{
  if (err) throw err
  console.log("db connected")
})

//mount template engine 
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

//middleware
app.use(express.json())
// mount route

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use("/tasks",taskRouter)


app.listen(process.env.PORT || 5000,(err)=>{
  if (err) throw err
  console.log("this port is running on port 5000")
})