import { Connection } from "../models/connection.js"



const connectToCreditor = async(userIdCreditor, userIdDeptor)=>{
    const newConnection = new Connection()
    newConnection.creditor=userIdCreditor
    newConnection.debtor=userIdDeptor
    newConnection.debts=[]
    return await newConnection.save()
}

const disconnectToCreditor = async(idConnection)=>
    await Connection.findByIdAndUpdate(idConnection, {active:false})

const getConnectionFromUsersIds= async(userIdCreditor, userIdDebtor) => 
    await Connection.findOne(
        {debtor: userIdDebtor, creditor:userIdCreditor}
    )
const getMyCreditorsFromUserId = async(userIdDebtor) =>
        await Connection.find({debtor: userIdDebtor})
const getMyDebtorsFromUserId = async(userIdCreditor) =>
        await Connection.find({creditor: userIdCreditor})

export {connectToCreditor, disconnectToCreditor, getConnectionFromUsersIds, getMyCreditorsFromUserId, getMyDebtorsFromUserId}