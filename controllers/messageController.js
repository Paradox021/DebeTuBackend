import * as messageService from "../services/messageService.js";

const findAll = async(req, res) => {
    try{
        const messages = await messageService.findAll()
        res.status(200).json(messages)
    }catch(err){
        res.status(500).json({message:'error al obtener los mensajes'+err})
    }
}
const save = async (req, res) => {
    try {
        const data = req.body
        const messageSaved = await messageService.save(data)
        res.status(200).json(messageSaved)
    } catch (err) {
        res.status(500).json({message:'error al crear el nuevo mensaje'+err})

    }
}

export {findAll, save}