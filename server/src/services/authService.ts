import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {getUserByEmail} from '../models/userModel';
import { SECRET_KEY } from '../config/env';

export const loginService = async (email:string,passwordPlaintext:string): Promise<string> => {
    const user = await getUserByEmail(email);

    if(!user) {
        throw new Error("Invalid Credentials");
    }
    const isMatch = await bcrypt.compare(passwordPlaintext,user.password);
    if(!isMatch){
        throw new Error("Invalid Credentials");
    }

    const payload = {
        id:user.id,
        username:user.username
    };
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: '1h'});
    return token;
}