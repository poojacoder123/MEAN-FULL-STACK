import mongoose, { Schema } from "mongoose";
import role from "./role";

const UserSchema = mongoose.Schema(
    {
        firestName:
        {
            type: String,
            required: true

        },

        lastName:
        {
            type: String,
            required: true

        },
        userName:
        {
            type: String,
            required: true,
            unique: true
        },
        email:
        {
            type: String,
            required: true,
            unique: true
        },
        image : {
            type : String,
            required: false,
            default :"https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg"
        },
        isAdmin :{
            type : Boolean,
            default: false
        },
        roles : {
            type : [Schema.Types.ObjectId],
            required : true,
            ref : "Role"
        }
       

    },
    {
        timestamps : true
    }




)

export default mongoose.model("User", UserSchema)