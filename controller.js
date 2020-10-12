const { number } = require('joi');
const Joi = require('joi')
const {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  } = require("./contacts");
  
  module.exports = class Controllers {
    
   static getListContacts(req, res, next) {
      
      return res.status(200).json(listContacts());
      
    }
    static createContact(req,res, next){
        // addContact(...req.body)
        // const listContact = listContacts()
        // addContact(req.body)
    //    const newContact = {
    //        ...req.body,
    //       id: listBefore.lenght  + 1
    //    }
    //    console.log(addContact)
    //     listBefore.push(newContact)
        return res.send(...req.body)
    }
   static validateCreateContact(req, res, next){
      const  createContactRules = Joi.object({
          name: Joi.string().required(),
          email: Joi.string().required(),
          number: Joi.string().required()
          
      })
      const result = Joi.valid(req.body,createContactRules)
      if(result.error){
          return res.status(400).send(result.error)
      }
    }
    static  getContact(req, res, next) {
      console.log(req.params.contactId)
  
        return res.status(200).json(getContactById(req.params.contactId));
        
      }
      static deleteContact(req,res,next){
        return res.status(200).json(removeContact(req.params.contactId))
      }
      static updateContacts (req,res,next){
        return res.status(200).json(removeContact(req.params.contactId))
    }
}