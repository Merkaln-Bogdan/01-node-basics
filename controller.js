const { number } = require('joi');
const Joi = require('joi')
const {
    listContacts,
   getContactById,
    removeContact,
    addContact,
    updateContact
  } = require("./contacts");

  
  module.exports = class Controllers {
    
   static getListContacts(req, res, next) {
      
      return res.status(200).json(listContacts());
      
    }
    static  createContact(req,res, next){
      
     
   
        return res.status(201).json( addContact(req.body.name, req.body.email, req.body.phone))
    }
   static validateCreateContact(req, res, next){
      const  createContactRules = Joi.object({
          name: Joi.string().required(),
          email: Joi.string().required(),
          phone: Joi.string().required()
          
      })
      const result = createContactRules.validate(req.body)
      if(result.error){
          return res.status(400).send(result.error)
      }
      next()
    }
    static getContact(req, res, next) {
    const id  = Number(req.params.contactId)
    
        return res.status(200).json(getContactById(id));
        
      }

      static deleteContact(req,res,next){
        const id  = Number(req.params.contactId)
        return  res.status(200).json(removeContact(id))
      }
      static updateContacts (req,res,next){
        const id = (req.params.contactId)
        const data =(req.body)
      updateContact(id, data)
        return res.status(200).json(listContacts())
    }
    static validateUpdateContact(req, res, next){
      const  updateContactRules = Joi.object({
          name: Joi.string(),
          email: Joi.string(),
          phone: Joi.string()
          
      })
      const result = updateContactRules.validate(req.body)
      if(result.error){
          return res.status(400).send(result.error)
      }
      next()
    }
}