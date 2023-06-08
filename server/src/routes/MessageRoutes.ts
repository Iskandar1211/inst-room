import { Router } from "express";
import MessageController from "../controller/MessageController";
const messageRoutes = Router();

messageRoutes.get('/message-user/:id/:contactid', MessageController.onGetMessageForUser());
messageRoutes.post('/create-messages', MessageController.onCreateMessage());
messageRoutes.get('/messages-contact/:id', MessageController.onGetMessageForContact());
messageRoutes.put('/edit-messages/:id', MessageController.onEditMessage());
messageRoutes.delete('/delete-messages/:id', MessageController.onDeleteMessage())


export = messageRoutes;