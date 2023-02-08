import { Router } from "express";
import passport from "passport";
import * as connectionController from '../controllers/connectionController.js'

const connectionRouter = Router()
connectionRouter.post('/connectToCreditor/:email',
    passport.authenticate('jwt', {session:false}), 
    connectionController.connectToCreditor)
    
    connectionRouter.patch('/disconnectToCreditor/:email',
    passport.authenticate('jwt', {session:false}), 
    connectionController.disconnectToCreditor)
    
    connectionRouter.get('/myDebtors/',
    passport.authenticate('jwt', {session:false}), 
    connectionController.getMyDebtors)
        
    connectionRouter.get('/myCreditors/',
    passport.authenticate('jwt', {session:false}), 
    connectionController.getMyCreditors)


export default connectionRouter