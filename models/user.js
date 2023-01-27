import { model, Schema } from "mongoose";
import bcrypt from "bcrypt"

let ruleSchema = new Schema(
    {
        _id: {type:Schema.ObjectId, auto:true},
        text: {type:String, required:true, trim:true},
        // idUser: {type: Schema.ObjectId, ref:'User'}
    },
    {
        versionKey:false,
        timestamps: true
    }
)

let userSchema = new Schema(
    {
        _id: {type:Schema.ObjectId, auto:true},
        name: {type:String, required:true, trim:true},
        email: {type:String, required:true, trim:true, index:true, unique:true},
        pass: {type:String, required:true, select:false, minlength:4},
        rules: [ruleSchema]
    },
    {
        timestamps: true,
        versionKey:false
    }
)

userSchema.pre('save', async function () {
    const user = this
    const salt = await bcrypt.genSalt(10)
    user.pass = await bcrypt.hash(user.pass, salt)
})

userSchema.methods.comparePassword = async function(pass){
    return await bcrypt.compare(pass, this.pass)
}

const User = model('User', userSchema)

export {User}