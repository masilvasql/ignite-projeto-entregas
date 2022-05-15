import {compare} from 'bcrypt';
import {sign} from 'jsonwebtoken';
import { prisma } from '../../../database/prismaClient';

interface IAuthenticateDeliveryMan{
    username:string;
    password:string;
}

export class AuthenticateDeliveryManUseCase{
    async execute({username, password}: IAuthenticateDeliveryMan){
        
        const DeliveryMan = await prisma.deliveryman.findFirst({
            where:{
                username:username
            }
        })

        if(!DeliveryMan){
            throw new Error("Username or password is invalid!")
        }

        const passwordMatch = await compare(password, DeliveryMan.password);
        
        if(!passwordMatch){
            throw new Error("Username or password is invalid!")
        }

        const token = sign({username}, "019acc25a4e242bb77ad489832ada12d", {
            subject: DeliveryMan.id,
            expiresIn:"1d"
        })

        return token;
    }
}