//  Раскомментируй и запиши значение
const path = require("path");
const fs = require("fs");
// const { uuid } = require('uuidv4');
const contactsPath = path.join(__dirname, "./db/contacts.json")



//Show all list contacts with module fs.readdFile

function listContacts() {
return list = require(contactsPath)
  // fs.readFile(contactsPath, "utf8", (err, data) => {
  //   if (err) throw err;
  //   return data
  // });
}
// Show contact with get id and method FIND
function getContactById(contactId) {
  
 const list =  require(contactsPath)

  // fs.readFile(contactsPath, "utf8", (err, data) => {
  //   if (err) throw err;
  return list.find(
      (contact) => contact.id === contactId
    );
   
  // });
}
//Show new list with added contact with spread array contacts and plus new contact with generate id (uuid)
function addContact(name, email, phone) {
  const ListBeforeAddContact = require(contactsPath)
 
  const contactList = [
    ...ListBeforeAddContact,
    {
      id: ListBeforeAddContact.length + 1,
      name: name,
      email: email,
      phone: phone,
    },
  ];
 return fs.writeFile(contactsPath, JSON.stringify(contactList), (err) => {
    if (err) throw err;
  })

}
//Remove contact with entered id person 
function removeContact(contactId) {
  // fs.readFile(contactsPath, "utf8", (err, data) => {
  //   if (err) throw err;
 const list =  require(contactsPath)

  const remove =  list.filter(
      (contact) => contact.id !== contactId
    );
    fs.writeFile(contactsPath, JSON.stringify(remove), (err) => {
      if (err) throw err;
    });

  // });
}
function updateContact(contactId,data) {
  console.log(contactId)
  const contacts = require(contactsPath);
  const listBefore = listContacts();
  const contactIndex = listBefore.findIndex((user) => user.id == contactId);
  contacts[contactIndex] = {
    ...contacts[contactIndex],
    ...data
  }
  
  fs.writeFile(contactsPath, JSON.stringify(contacts),(err) => {
    if (err) throw err;
  });


}


module.exports = { listContacts, getContactById, addContact, removeContact,updateContact }