let expres=require("express")
let router=expres.Router()


router.get("/",async(req,res)=>{

    try
    {
        res.send("Sending response")

    } catch (error) {
       res.send(error)
    }

    })


module.exports=router