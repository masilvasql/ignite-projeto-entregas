import { prisma } from "../../../../database/prismaClient";

interface IClient{
    id_client:string;
}

export class FindaAllDeliveriesUseCase{
    async execute({id_client}:IClient){
        console.log(id_client)
        const result = await prisma.clients.findMany({
            where:{
                id:id_client
            },
            include:{
                deliveries:true
            },
        })

        return result;
    }
}