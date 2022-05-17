import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvailableUseCase";


export  class FindAllAvailableController{
    async handle(request:Request, response: Response){
        const findAllAvailableUseCase =  await new FindAllAvailableUseCase();
        const deliveries = await findAllAvailableUseCase.execute();
        response.json(deliveries);
    }
}