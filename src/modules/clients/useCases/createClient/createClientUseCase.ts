import { prisma } from "../../../../database/prismaClient";
import { hash } from 'bcrypt'


interface ICreateCliente {
    username: string;
    password: string;
}

export class CreateClientUseCase {
    async execute({ password, username }: ICreateCliente) {
        const clientExist = await prisma.clients.findFirst({
            where: {
                username: {
                    mode: "insensitive",
                    equals: username
                }
            }

        })

        if (clientExist) {
            throw new Error("Client already exists");
        }

        const hashPassowrd = await hash(password, 10);

        const client = await prisma.clients.create({
            data: {
                username: username,
                password: hashPassowrd
            }
        })

        return client;

    }
}