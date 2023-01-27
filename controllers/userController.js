import * as userService from "../services/userService.js";

const findAll = async(req, res) => {
    try{
        // if(req.user.email!="admin@gmail.com") {
        //     res.status(500).json({messages:'solo administradores'})
        // }
        const users = await userService.findAll()
        res.status(200).json(users)
    }catch(err){
        res.status(500).json({message:'error al obtener los usuarios'+err})
    }
}
const findById = async(req, res) => {
    try{
        const id = req.params.id
        const user = await userService.findById(id)
        res.status(200).json(user)
    }catch(err){
        res.status(500).json({message:'error al obtener los usuarios'+err})
    }
}
const save = async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        const userSaved = await userService.save(data)

        res.status(200).json(userSaved)
    } catch (err) {
        res.status(500).json({message:'error al crear el nuevo usuario'+err})

    }
}

const removeAll = async(req, res) => {
    try {
        await userService.removeAll()
        res.status(200).json({message:'usuarios borrados correctamente'})
    } catch (error) {
        res.status(500).json({message:'error al borrar usuarios'+error})
    }

}

export {findAll, findById, save, removeAll}