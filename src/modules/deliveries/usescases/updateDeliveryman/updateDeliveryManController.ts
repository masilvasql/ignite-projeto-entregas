import { Request, Response } from "express";
import { UpdateDeliveryManUseCase } from "./updateDeliveryManUseCase";



export class UpdateDeliveryManController{
    async handle(request:Request, response: Response){
        const { id_deliveryman } = request;
        const {id: id_delivery} = request.params;

        const updateDeliveryManUseCase  = new UpdateDeliveryManUseCase();
        const delivery = await updateDeliveryManUseCase.execute({
            id_delivery,
            id_deliveryman            
        })

        return response.json(delivery);

    }
}