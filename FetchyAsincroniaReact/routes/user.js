const express=require("express");
const router=express.Router();
const {createUser,updateUser,getAllUsers,deleteUser,getUser}=require("../controllers/user");
router.get("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
module.exports=router //elimina solo los campos que queremos cambiar