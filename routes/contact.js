let expres = require("express")
let router=expres.Router()
let { PrismaClient} =require("@prisma/client")
let prisma=new PrismaClient();
// const blogposts = new PrismaClient

router.get("/pagination",async(req,res)=>{

    try
    {
       
        let totalcontacts=await prisma.contact.findMany()
        let totalgroups = totalcontacts.length/req.query.show
        let groupdata=[]
      
        groupdata.push({totalgroups:Math.ceil(totalgroups)})
        
        for(let a=(req.query.show*req.query.group)-req.query.show;    a<=req.query.show*req.query.group;   a++)
        {
                groupdata.push(totalcontacts[a-1])
        }
        let results = groupdata.filter(element => {
          return element !== undefined;
        });
         
     res.json(results)
    }
             
    catch (error) {
       res.send(error)
    }
  })

  
router.get("/namesearch",async(req,res)=>{

    try
    {
       
        const result = await prisma.contact.findMany({
            where: {
                name: {
                    startsWith: req.query.name,
              },
            },
          })
        res.send(result)

    }
             
    catch (error) {
       res.send(error)
    }
  })

  
  router.get("/",async(req,res)=>{

    try
    {
      let contactlead=await prisma.contact.findMany()
     res.json(contactlead)
    }
             
    catch (error) {
       res.send(error)
    }
  })


router.post("/",async(req,res)=>{

    try
    {

      const newcontact = await prisma.contact.create({
        data: {
          email : req.body.email,
          name :req.body.name,
          message :req.body.message
        },
      })
      
      res.send(newcontact)

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

      let updatecontact=await prisma.contact.update({
        where: {
          ID: Number(id) ,
        },
        data: {
          postheading:heading,
          postmessage:message,
        },
      })
     res.json(updatecontact)
    }
             
    catch (error) {
       res.send(error)
    }
  })

  router.delete("/:id",async(req,res)=>{

    try
    {
      let id=req.params.id
      let deletecontact=await prisma.contact.delete({
        where:{
          ID:Number(id),
        },
      });
     res.json(deletecontact)
    }
             
    catch (error) {
       res.send(error)
    }
  })


module.exports=router