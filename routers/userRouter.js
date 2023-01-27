import { Router } from "express";
import passport from "passport";
import * as userController from '../controllers/userController.js'

const userRouter = Router()

// listar todos los usuarios
userRouter.get('/', 
//    passport.authenticate('jwt', {session:false}), 
    userController.findAll)
// listar un usuario
userRouter.get('/:id', userController.findById)
// añadir un nuevo usuarios
userRouter.post('/', userController.save)
// borar todos los usuarios
userRouter.delete('/', passport.authenticate('jwt', {session:false}), userController.removeAll)

export default userRouter