let expres = require("express")
let router=expres.Router()
let { PrismaClient} =require("@prisma/client")
let prisma=new PrismaClient();
// const blogposts = new PrismaClient

router.get("/",async(req,res)=>{

    try
    {
      let posts=await prisma.blogposts.findMany()
     res.json(posts)
    }
             
    catch (error) {
       res.send(error)
    }
  })

router.post("/",async(req,res)=>{

    try
    {
      let ph=req.body.postheading
      let pm=req.body.postmessage

      const post = await prisma.blogposts.create({
        data: {
          postheading:ph,
          postmessage:pm
        },
      })
      
      res.send(post)

    }
             
    catch (error) {
       res.send(error)
       console.log(error)
    }
  })
  

  router.put("/:id",async(req,res)=>{

    try
    {
      let id=req.params.id
      let heading=req.body.postheading
      let message=req.body.postmessage

      let posts=await prisma.blogposts.update({
        where: {
          ID: Number(id) ,
        },
        data: {
          postheading:heading,
          postmessage:message,
        },
      })
     res.json(posts)
    }
             
    catch (error) {
       res.send(error)
    }
  })

  router.delete("/:id",async(req,res)=>{

    try
    {
      let id=req.params.id
      let posts=await prisma.blogposts.delete({
        where:{
          ID:Number(id),
        },
      });
     res.json(posts)
    }
             
    catch (error) {
       res.send(error)
    }
  })


module.exports=router