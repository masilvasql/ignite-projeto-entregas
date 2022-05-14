import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUsecase";

export class AuthenticateClientController{
    async handle(request: Request, response:Response){

        const {username, password} = request.body;

        const AuthenticateClientUsecase = new AuthenticateClientUseCase();

        const result = await AuthenticateClientUsecase.execute({
            username,
            password
        })

        return response.json(result);
    }
}