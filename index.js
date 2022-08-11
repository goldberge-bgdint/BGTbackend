let express=require("express")
let mysql2=require("mysql2")
let bodyparserver=require("body-parser")
let app=express()

var cors = require('cors')

app.use(cors()) 

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


// parse application/x-www-form-urlencoded
app.use(bodyparserver.urlencoded({ extended: false }));
// parse application/json
app.use(bodyparserver.json());



// -----routing
let route=require("./routes/route")
app.use("/",route)

//Port configuration
let port=4000
app.listen(port, ()=>{
    console.log("Listening at port: "+port)
})
