import { Message } from "../models/message.js";

const findAll = async () => await Message.find().limit(10)
const save = async (data) => await (new Message(data).save())

export {findAll, save}