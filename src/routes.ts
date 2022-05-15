import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import {AuthenticateDeliveryManController} from './modules/account/authenticateDelivertMan/AuthenticateDeliveryManController'
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { CreateDeliveryManController } from "./modules/deliveryman/useCases/createDeliveryman/createDeliveryManController";
const routes = Router();

const createClientController = new CreateClientController();
const createDeliveryManController = new CreateDeliveryManController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliveryManController = new AuthenticateDeliveryManController();

routes.post("/client/", createClientController.handle);
routes.post("/deliveryman/", createDeliveryManController.handle);
routes.post("/client/authenticate/", authenticateClientController.handle);
routes.post("/deliveryman/authenticate/", authenticateDeliveryManController.handle);

export{routes};