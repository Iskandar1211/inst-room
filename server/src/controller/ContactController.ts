import { ContactModel } from './../models/ContactModel';
import { Request, Response } from "express";

export default class ContactController {
    static getAllContacts() {
        return async (req: Request, res: Response) => {
            try {
                const contacts = await ContactModel.getContacts();
                return res.json(contacts)
            } catch (error) {
                return res.status(401).json(error)
            }
        }

    }
}

