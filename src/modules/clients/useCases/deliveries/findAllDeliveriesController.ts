import { Request, Response } from "express";
import { FindaAllDeliveriesUseCase } from "./findAllDeliveriesUsesCase";



export class FindAllDeliveriesController{
    async handle(request:Request, response:Response){
        
        const {id_client} = request;
        
        const findaAllDeliveriesUseCase = new FindaAllDeliveriesUseCase();
        
        const deliveries = await findaAllDeliveriesUseCase.execute({id_client});

        return response.json(deliveries);

    }
}