import { Request, Response } from "express";
import { FindAllDeliveriesDeliverymanUseCase } from "./findaAllDeliveriesDeliverymanUseCase";



export class FindaAllDeliveriesDeliverymanController{
    async handle(request:Request, response: Response){
        const {id_deliveryman} = request;

        const findAllDeliveriesUseCase = new FindAllDeliveriesDeliverymanUseCase();
        
        const deliveries = await findAllDeliveriesUseCase.execute({id_deliveryman});

        return response.json(deliveries);
    }
}