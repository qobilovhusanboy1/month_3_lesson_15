
const schema= require('../model/index')

const register = async(req,res)=>{
    try {
        let job="not work"
        const {fullname,description,username} = req.body;

        const data = await schema.create({fullname,username, description})

        res.status(201).json({message: "Success",data: data});

    } catch (error) {
        res.status(500).json({message:error.message});
    }
}


const use_view = async(req,res)=>{
    try {
        const data = await schema.find({})
        res.status(200).json({message:data})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"});
    }
}


module.exports= {register,use_view}