import Role from "../models/role.js";

export  const createUser = async (req, res, next) => {
    try {
        if (req.body.role !== null) {
            const newRole = new Role(req.body);
            await newRole.save();
            return res.send("Role created")

        }
        else {
            return res.status(400).send("bad request")
        }
    } catch (error) {
        return res.status(500).send("internal server error")
    }
}

export const UpdateUser =  async (req, res, next) => {
    try {
        const role = await Role.findById({ _id: req.params.id })
        if (role) {
            const newData = await Role.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            )
            return res.status(200).send("role updated");
        }
        else{
            return res.status(404).send("role not found");
        }

    } catch (error) {
        return res.status(500).send("internal server error")
    }
}
export const getAllUser = async (req,res,next)=>{
    try {
        const roles= await Role.find({});
        return res.status(200).send(roles)
        
    } catch (error) {
        return res.status(500).send("internal server error")
    }
}

export const deleteUser = async (req,res,next)=>{
    try {
      const roleId = req.params.id;
      const role = Role.findById({_id: roleId});
      if(role){
        Role.findByIdAndDelete(roleId);
        return res.status(200).send("role deleted ")
      }
      else{
        return res.status(404).send("role not found");
      }

      
    } catch (error) {
        return res.status(500).send("internal server error")
    }
}