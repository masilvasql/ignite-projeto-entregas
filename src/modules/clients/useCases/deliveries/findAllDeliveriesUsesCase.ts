import { prisma } from "../../../../database/prismaClient";

interface IClient{
    id_client:string;
}

export class FindaAllDeliveriesUseCase{
    async execute({id_client}:IClient){
        const result = await prisma.clients.findMany({
            where:{
                id:id_client
            },
            select:{
                deliveries:true,
                id:true,
                username:true
            },
        })

        return result;
    }
}