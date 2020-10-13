  
const { Router } = require("express");
const userRouter = Router();
const Controllers = require("./controller");

// Get User list
userRouter.get("/", Controllers.getListContacts );
userRouter.post("/", Controllers.validateCreateContact, Controllers.createContact);
userRouter.get("/:contactId", Controllers.getContact);
userRouter.delete("/:contactId", Controllers.deleteContact);
userRouter.patch("/:contactId",Controllers.validateUpdateContact, Controllers.updateContacts)

module.exports=userRouter