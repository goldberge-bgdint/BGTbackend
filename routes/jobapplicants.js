let expres=require("express")
let router=expres.Router()
let { PrismaClient} =require("@prisma/client")
let prisma=new PrismaClient();

// get paginated Data
router.get("/pagination",async(req,res)=>{

    try
    {
      
        let totalapplicants=await prisma.Job_applicant.findMany()
        let totalgroups = totalapplicants.length/req.query.show
        let groupdata=[]
      
        groupdata.push({totalgroups:Math.ceil(totalgroups)})
        
        for(let a=(req.query.show*req.query.group)-req.query.show;    a<=req.query.show*req.query.group;   a++)
        {
                groupdata.push(totalapplicants[a-1])
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

// Get all Applicants

router.get("/",async(req,res)=>{

    try {
        
        const applicants= await prisma.Job_applicant.findMany()
        res.send(applicants)

    } catch (error) {
       res.send(error)
    }

})

router.post("/",async(req,res)=>{
    try {
      let newapplicant= await prisma.Job_applicant.create({
        data:{
            job_id : req.body.job_id,
            name : req.body.name,
            email : req.body.email,
            number : req.body.number,
            coverletter : req.body.coverletter,
            mediafiles_resume_id : req.body.mediafiles_resume_id,
        }
      })

      res.send(newapplicant)

    } catch (error) {
      res.send(error)
    }

  })

  module.exports=router