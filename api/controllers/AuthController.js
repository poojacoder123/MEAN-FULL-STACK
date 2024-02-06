import Role from "../models/role.js"
import User from "../models/user.js"
import bcrypt from 'bcryptjs'
import { createError } from "../utils/error.js"
import { CreateSuccess } from "../utils/success.js"
import  Jwt  from "jsonwebtoken"


export const register = async(req,res,next)=>{
   // return next(createError(500, "my custom error"))
 const role = await Role.find({role: 'admin'});
 var salt =await bcrypt.genSaltSync(10);
 var hash =await bcrypt.hashSync(req.body.password, salt);
 const newUser = new User({
    firestName :req.body.firestName,
    lastName :req.body.lastName,
    userName :req.body.userName,
    email :req.body.email,
    password : hash,
    roles:role,
   
 })
 await newUser.save();
 console.log(res);
//  return res.status(200).send("user registered successfully");
return next(CreateSuccess(200, "user registered successfully"))

}

export const login = async(req,res,next)=>{
   try {
      const user =await  User.findOne({email:req.body.email}).
      populate("roles", "role");
      if(!user){
         return  res.status(400).send("user not found");

      }
      const isPasswordCoreect = await bcrypt.compare(req.body.password, user.password);
      if(!isPasswordCoreect){
         return  res.status(400).send("Incorrect password");

      }
      const token =jwt.sign({
         id: user._id,
         isAdmin : user.isAdmin,
         role: user.roles

      })
      //   return  res.status(202).send("login succesfully");
      return next(CreateSuccess(200, "user login successfully"))
   } catch (error) {
      
   }  
}