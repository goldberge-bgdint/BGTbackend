let expres = require("express")
let router=expres.Router()
let { PrismaClient} =require("@prisma/client");
let prisma=new PrismaClient();

const fs = require('fs');
const mime = require('mime');

const uploadImage = async (req, res, next) => {

    try {
        let base64Image = req.body.base64image.split(';base64,').pop();
        let name=req.body.name+Math.floor(Math.random() * 100)
        let type=req.body.type 
        let path="./asset/"+req.body.directory+"/"+name+"."+type
        fs.writeFile( path+name+"."+type, base64Image, {encoding: 'base64'}, async (err) =>{
           
            try {               
                let newmedia=await prisma.media_file.create({
                    data:{
                        name :name,
                        path :path,
                        type :req.body.type ,
                        active :"true"
                    }
                })              
                res.send(newmedia)
            } catch (error) {
                res.send(error)
            }
        });

    } catch (e) {
      console.log(e);
    }
}

// posting files
router.post("/",uploadImage)

 module.exports=router