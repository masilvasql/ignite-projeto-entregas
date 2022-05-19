import { prisma } from "../../../../database/prismaClient"


interface IDeliveryman{
    id_deliveryman:string
}

export class FindAllDeliveriesDeliverymanUseCase{
    async execute({id_deliveryman}:IDeliveryman){
        const result = await prisma.deliveryman.findMany({
            where:{
                id:id_deliveryman
            },
            select:{
                deliveries:true,
                id:true,
                username:true
            }
        })

        return result;
    }
}