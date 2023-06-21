const { restart } = require("nodemon");
const User=require("../models/User");
const { StatusCodes }=require("http-status-codes");

const getAllUsers=async(req, res) => {
    const user=await User.find({});
    res.status(StatusCodes.OK).json({user, count:user.lenght})
}
const createUser=async(req,res)=>{

    const user=await User.create({})
}

const updateUser=async(req,res)=>{

    const {id:userId}=req.params
    try{
        const user=await User.findByIdAndUpdate({_id:userId},req.body, {new:true});
        res.status(StatusCodes.OK).json(usuario);


    } catch(e){

       return res.status(StatusCodes.NOT_FOUND),json ({message:"User not found"});
    }
}


const deleteUser=async(req,res)=>{

    const {id:userId}=req.params
    try{
        const {id:userId}=req.params;
        const user=await User.findByIdAndRemove({_id:userId});
      if(!user){
        res.status(StatusCodes.NOT_FOUND).json ({message:"User not found"});
      }
        res.status(StatusCodes.OK).json({user});


    } catch(e){

        
    }
}

const getUser=async(req,res)=>{
    const {id:userId}=req.params;
    const user=User.findOne({_id:userId});
    if (!user){
        res.status(StatusCodes.NOT_FOUND).json ({message:"User not found"});
    }

    res.status(StatusCodes.OK).json({user});

}
module.exports = {
    createUser,
    updateUser,
    getAllUsers,
    deleteUser,
    getUser


}