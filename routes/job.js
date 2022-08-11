let expres=require("express")
let router=expres.Router()
let { PrismaClient} =require("@prisma/client")
let prisma=new PrismaClient();


// get Address

router.get("/address",async(req,res)=>{
  try
  {
    let addresses=await prisma.jobs.findMany({
      distinct: ['address'],
      select: {
        address: true,
      },
    })    
    let arr=[]
    addresses.forEach(e=>{
      arr.push(e.address)
    })

     res.send(arr)
  } catch (error) {
     res.send(error)
  }
  })

// get Depratments

router.get("/departments",async(req,res)=>{
  try
  {
    let departments=await prisma.jobs.findMany({
      distinct: ['department'],
      select: {
        department: true,
      },
    })    
    let arr=[]
    departments.forEach(e=>{
      arr.push(e.department)
    })

     res.send(arr)
  } catch (error) {
     res.send(error)
  }
  })

// Gett all jobs
router.get("/",async(req,res)=>{
    try
    {
      let jobs=await prisma.jobs.findMany()
       res.send(jobs)
    } catch (error) {
       res.send(error)
    }
    })

    // Posting new Job
    
    router.post("/",async(req,res)=>{
      try {
        let newjob= await prisma.jobs.create({
          data:{
            title : req.body.title,
            type : req.body.type,
            status : req.body.status,
            nature : req.body.nature,
            department : req.body.department,
            address : req.body.address,
            imageid : req.body.imageid,
            vacancies : req.body.vacancies,
            description : req.body.description,
          }
        })

        res.send(newjob)

      } catch (error) {
        res.send(error)
      }

    })


module.exports=router