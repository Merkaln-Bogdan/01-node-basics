//  Раскомментируй и запиши значение
const path = require("path");
const fs =require("fs") ;
const { uuid } = require('uuidv4');
const contactsPath =path.join(__dirname, "./db/contacts.json")



//Show all list contacts with module fs.readdFile

function listContacts() {
  
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) throw err;
    console.table(data);
  });
}
// Show contact with get id and method FIND
function getContactById(contactId) {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) throw err;
    const dataContact = JSON.parse(data).find(
      (contact) => contact.id === contactId
    );
    console.log(dataContact);
  });
}
//Show new list with added contact with spread array contacts and plus new contact with generate id (uuid)
function addContact(name, email, phone) {
  const ListBeforeAddContact =require(contactsPath)
  const contactList = [
    ...ListBeforeAddContact,
    {
      id: uuid(),
      name: name,
      email: email,
      phone: phone,
    },
  ];
  fs.writeFile(contactsPath, JSON.stringify(contactList), (err) => {
    if (err) throw err;
  })
  console.log(contactList)
}
//Remove contact with entered id person 
function removeContact(contactId) {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) throw err;
    const findContact = JSON.parse(data).filter(
      (contact) => contact.id !== contactId
    );
   fs.writeFile(contactsPath, JSON.stringify(findContact), (err) => {
      if (err) throw err;  
    });
   console.log(findContact)
  });
}



module.exports = { listContacts,getContactById,addContact,removeContact }