import * as userService from "../services/userService.js";
import {ExtractJwt, Strategy} from "passport-jwt"
import dotenv from 'dotenv'

dotenv.config()

const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : process.env.SECRET_TOKEN
}

const jwtStrategy = new Strategy(opts, async (payload, done) => {
    try{
        const user = await userService.findById(payload._id)
        if(user) return done(null, user)
        return done(null, false)
    }catch(err){
        console.log(err)
    }
});

export default jwtStrategy