import * as userService  from '../services/usersService.js'

const findAll = async (req, res) =>{
    try{
        const users = await userService.findAll()
        res.status(200).json(users)
    }catch(err){
        res.status(500).json({message: 'error al obtener los mensajes:'+err})
    }
}

const save = async (req, res) => {
    try{
        const data = req.body
        const userSave = await userService.save(data)
        res.status(200).json(userSave)
    }catch(err){
        res.status(500).json({message: 'error al crear el nuevo mensaje.'+err})
    }
}

export {findAll, save}