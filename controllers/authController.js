import { findByEmail } from "../services/userService.js"
import jwt from 'jsonwebtoken'

async function signIn(req, res){
    const {email, pass} = req.body
    const logged = await findByEmail(email)
    if(!logged) return res.status(400).json({message:'email o contraseña incorrecto'})
    console.log(logged, pass)
    const validPassword = await logged.comparePassword(pass)
    if(!validPassword)
        return res.status(400).json({message: 'Usuario o contraseña incorrecta'})

    const token = jwt.sign({
        chiste: 'ultimo animal que se subió al arca de Noe? delfin',
        _id: logged._id,
        email: logged.email,
        exp: Math.floor(Date.now()/1000) + 60 * 60 * 300
    }, process.env.SECRET_TOKEN)

    res.status(200).json({token})
}

export {signIn}