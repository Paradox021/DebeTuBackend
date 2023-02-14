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
        await Connection.find({debtor: userIdDebtor}).populate('creditor')
const getMyDebtorsFromUserId = async(userIdCreditor) =>
        await Connection.find({creditor: userIdCreditor}).populate('debtor')
const addDebt = async(idConnection, debt) => {
    const connection = await Connection.findById(idConnection)
    connection.debts.push(debt)
    return await connection.save()
}
const removeDebt = async(idConnection, idDebt) => {
    const connection = await Connection.findById(idConnection)
    connection.debts.pull({_id:idDebt})
    return await connection.save()
}

export {connectToCreditor, disconnectToCreditor, getConnectionFromUsersIds, getMyCreditorsFromUserId, getMyDebtorsFromUserId, addDebt, removeDebt}