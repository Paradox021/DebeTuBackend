import * as usersServices  from '../services/userService.js'
import * as connectionServices  from '../services/connectionService.js'

const connectToCreditor = async (req, res) =>{
    try{
        const userCreditorEmail = req.params.email
        const userLoggedDeptor = req.user

        const userCreditor = await usersServices.findByEmail(userCreditorEmail)
        if(!userCreditor){
            res.status(404).json({message: 'No existe el usuario acredor'})
            return
        }
    
        const connection = 
            await connectionServices.getConnectionFromUsersIds( 
                userCreditor._id, userLoggedDeptor._id)
        if(connection){
            res.status(409).json({message: 'Error, los usuarios ya están conectados'})
            return
        } 
            
            

        const newConnection = await connectionServices.connectToCreditor(
            userCreditor._id, userLoggedDeptor._id)
              
        res.status(200).json(newConnection)
    }catch(err){
        res.status(500).json({message: 'error al conectarse con un acredor:'+err})

    }
}

const disconnectToCreditor = async (req, res) =>{
    try{
        const userLoggedDeptor = req.user
        const userCreditorEmail = req.params.email
        const userCreditor = usersServices.findByEmail(userCreditorEmail)
        if(!userCreditor)
            req.status(404).json({message: 'No existe el usuario acredor'})
        

        const connection = 
            await connectionServices.getConnectionFromUsersIds( 
                userCreditor._id, userLoggedDeptor._id)
        if(!connection)
                res.status(404).json({message: 'No existe la conexión entre esos usuarios'})
        const updatedConnecton = 
            await connectionServices.disconnectToCreditor(connection._id)
        res.status(200).json(updatedConnecton)
    }catch(err){
        res.status(500).json({message: 'error al desconectarse de un acreedor:'+err})
    }
}

const getMyCreditors = async (req, res) => {
    try {
        const connection = await connectionServices.getMyCreditorsFromUserId(req.user.id)
        res.status(200).json(connection)
    } catch (error) {
        res.status(500).json({message: 'error al desconectarse de un acreedor:'+err})
    }
}
const getMyDebtors = async (req, res) => {
    try {
        const connection = await connectionServices.getMyDebtorsFromUserId(req.user.id)
        res.status(200).json(connection)
    } catch (error) {
        res.status(500).json({message: 'error al desconectarse de un acreedor:'+err})
    }
}


export { connectToCreditor, disconnectToCreditor, getMyCreditors, getMyDebtors}