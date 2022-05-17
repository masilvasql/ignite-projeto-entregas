import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUsecase";



export class CreateDeliveryController{
    async handle(request:Request, response: Response){
        const { item_name} = request.body;
        
        const {id_client} = request;

        
        const createDeliveryUsecase = new CreateDeliveryUseCase();
        
        const delivery = await createDeliveryUsecase.execute({
            id_client,
            item_name
        })

        return response.json(delivery);
    }
}