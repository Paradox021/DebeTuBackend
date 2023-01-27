import { model, Schema } from "mongoose";

let debtSchema = new Schema(
    {
        _id: {type:Schema.ObjectId, auto:true},
        concept:String,
        amount:Number,
        isPaid:Boolean
    },
    {
        timestamps:true,
        versionKey:false
    }
)

let connectionSchema = new Schema(
    {
        _id: {type:Schema.ObjectId, auto:true},
        IdCreditor: {type:Schema.ObjectId, ref:'User'},
        IdDebtor: {type:Schema.ObjectId, ref:'User'},
        Debts: [debtSchema]
    },
    {
        timestamps:true,
        versionKey:false
    }
)
const Connection = model('Conection', connectionSchema)

export {Connection}