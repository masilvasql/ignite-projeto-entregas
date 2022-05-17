import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import {AuthenticateDeliveryManController} from './modules/account/authenticateDelivertMan/AuthenticateDeliveryManController'
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { CreateDeliveryController } from "./modules/deliveries/usescases/createDelivery/CreateDeliveryController";
import { CreateDeliveryManController } from "./modules/deliveryman/useCases/createDeliveryman/createDeliveryManController";
const routes = Router();

const createClientController = new CreateClientController();
const createDeliveryManController = new CreateDeliveryManController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliveryManController = new AuthenticateDeliveryManController();
const deliveryController = new CreateDeliveryController();

routes.post("/client/", createClientController.handle);
routes.post("/deliveryman/", createDeliveryManController.handle);
routes.post("/client/authenticate/", authenticateClientController.handle);
routes.post("/deliveryman/authenticate/", authenticateDeliveryManController.handle);
routes.post("/delivery", ensureAuthenticateClient ,deliveryController.handle);

export{routes};