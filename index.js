let express=require("express")
let app=express()


//-----routing

let blogpostroute=require("./routes/blogposts")
app.use("/blogpost",blogpostroute)


//Port configuration
let port=4000
app.listen(port, ()=>{
    console.log("Listening at port: "+port)
})