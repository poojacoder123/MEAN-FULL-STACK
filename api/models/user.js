import mongoose, {Schema} from "mongoose";



const UserSchema = mongoose.Schema(
    {
        firstName:
        {
            type: String,
            // required: true

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
        password:
        {
            type: String,
            required: true,
           
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
    
)

export default mongoose.model("User", UserSchema)