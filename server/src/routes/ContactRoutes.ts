import express from 'express'
import ContactController from '../controller/ContactController'
const contactsRoutes = express.Router()



contactsRoutes.get('/', ContactController.getAllContacts())

export = contactsRoutes