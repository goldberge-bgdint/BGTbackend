let expres=require("express")
const { route } = require("./job")
let rootRouter =expres.Router()

rootRouter.use(`/careers`, require("./job"));
rootRouter.use(`/contact`, require("./contact"));
rootRouter.use(`/posts`, require("./blogposts"));
rootRouter.use(`/mediafile`, require("./Mediafile"));
rootRouter.use(`/jobapplicant`, require("./jobapplicants"));

module.exports=rootRouter