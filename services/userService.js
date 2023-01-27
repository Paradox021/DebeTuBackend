import { User } from "../models/user.js";

const findAll = async () => await User.find()
const findById = async(id) => await User.findById(id)
const findByEmail = async(email) => await User.findOne({email}).select('+pass')
const save = async (data) => await (new User(data).save())
const removeAll = async() => await User.remove()

export {findAll, save, removeAll, findById, findByEmail}