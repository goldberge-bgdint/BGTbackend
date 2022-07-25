let expres=require("express")
let router=expres.Router()


router.get("/",async(req,res)=>{

    try
    {
        res.send("Sending Job response")

    } catch (error) {
       res.send(error)
    }

    })


module.exports=router