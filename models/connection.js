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
        creditor: {type:Schema.ObjectId, ref:'User'},
        debtor: {type:Schema.ObjectId, ref:'User'},
        Debts: [debtSchema],
        active: {type: Boolean, default: true, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)
const Connection = model('Conection', connectionSchema)

export {Connection}