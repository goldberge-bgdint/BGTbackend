module.exports=(sequelize,DataTypes)=>{
    const posts=sequelize.define("postsmodel",{
    heading:{
        type: DataTypes.STRING
    },
    blog:{
        type: DataTypes.STRING
    }    
    });
}