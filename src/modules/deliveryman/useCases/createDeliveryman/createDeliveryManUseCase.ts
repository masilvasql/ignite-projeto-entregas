import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";


interface ICreateDeliveryMan{
    username:string;
    password:string
}

export class CreateDeliveryManUseCase{

    async execute({username, password}:ICreateDeliveryMan){
        const deliveryManExist = await prisma.deliveryman.findFirst({
            where:{
                username:{
                    mode:"insensitive",
                    equals:username
                }
            }
        })

        if(deliveryManExist){
            throw new Error("Deliveryman already exists!");
        }

        const hashPassowrd = await hash(password, 10);

        const deliveryman = await prisma.deliveryman.create({
            data:{
                username:username,
                password: hashPassowrd
            }
        })

        return deliveryman

    }

}