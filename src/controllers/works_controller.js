const works= require('../model/index1')
const schema = require('../model/index');
const works_view = async(req,res)=>{
    try {
        const data = await works.find({})
        if (!data)  return res.status(200).json({message:"Information Not Found"})

        res.status(200).json({message:"success",data:data})
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
}


const works_add = async(req,res)=>{
    try {
        const {work_id,job,payment} = req.body;

        const data =  await works.create({work_id,job,payment})
        console.log(data);

        return res.status(200).json({message:"success",data:data})
    } catch (error) {
       res.status(500).json({message:"Internal Server Error"}) 
    }
}


const works_enter = async(req,res)=>{
    try {
        const {username,work_id}= req.body;

        const user = await schema.findOne({username: username});
        const work = await works.findOne({work_id: work_id});

        if(!user) return res.status(200).json({message: 'user not found'});
        if(!work) return res.status(200).json({message: 'work not found'});
        if(user.nowjob!='false' && work.who_worker_username!='false') {
            return res.status(200).json({message:"this work is already exists"})
        }

        const  data = await schema.findOneAndUpdate({username: user.username},{nowjob:work.job})
        console.log(data);
        const  data1 = await works.findOneAndUpdate({work_id:work_id},{who_worker_username:user.username});
        return res.status(200).json({message:"success"})



        

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
}


module.exports = {works_view,works_add,works_enter}