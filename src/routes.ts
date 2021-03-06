import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import {AuthenticateDeliveryManController} from './modules/account/authenticateDelivertMan/AuthenticateDeliveryManController'
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/findAllDeliveriesController";
import { CreateDeliveryController } from "./modules/deliveries/usescases/createDelivery/CreateDeliveryController";
import {FindAllAvailableController} from "./modules/deliveries/usescases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliveryManController } from "./modules/deliveries/usescases/updateDeliveryman/updateDeliveryManController";
import { UpdateEndDateController } from "./modules/deliveries/usescases/updateEndDate/updateEndDateController";
import { CreateDeliveryManController } from "./modules/deliveryman/useCases/createDeliveryman/createDeliveryManController";
import { FindaAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/findaAllDeliveriesDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const createDeliveryManController = new CreateDeliveryManController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliveryManController = new AuthenticateDeliveryManController();
const deliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliveryController = new UpdateDeliveryManController();
const findAllVeliveriesController = new FindAllDeliveriesController();
const findaAllDeliveriesDeliverymanController = new FindaAllDeliveriesDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

routes.post("/client/", createClientController.handle);
routes.post("/deliveryman/", createDeliveryManController.handle);
routes.post("/client/authenticate/", authenticateClientController.handle);
routes.post("/deliveryman/authenticate/", authenticateDeliveryManController.handle);
routes.post("/delivery/", ensureAuthenticateClient ,deliveryController.handle);
routes.get("/delivery/available", ensureAuthenticateDeliveryman ,findAllAvailableController.handle);
routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman ,updateDeliveryController.handle);
routes.get("/client/deliveries", ensureAuthenticateClient ,findAllVeliveriesController.handle);
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, findaAllDeliveriesDeliverymanController.handle);
routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman , updateEndDateController.handle);

export{routes};