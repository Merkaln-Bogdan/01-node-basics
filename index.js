import argv from "yargs";
import http from "http";
import dotenv from "dotenv";
import listContacts from "./contacts.js";

// dotenv.config();

console.log(listContacts);

// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       listContacts();
//       break;

//     case "get":
//       getContactById(3);
//       break;

//     case "add":
//       break;

//     case "remove":
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);
