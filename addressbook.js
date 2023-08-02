const {
  addContact,
  editContact,
  printContact,
  deleteContact,
  searchContactByCity
} = require("./AddressBookOperation");
// import { addContact } from "./AddressBookOperation";
console.log("Welcome to addressbook project...!!!");
var readlineSync = require("readline-sync");
let loop = true;

while (loop) {
  console.log(
    `Press 1 to add contact. 
    Press 2 to print contact.
    Press 3 to edit contact.
    Press 4 to delete contact.
    Press 5 to search contact by city name. 
    Press 6 to exit. `
  );
  let option = readlineSync.questionInt("What you want to perform : ");
  switch (option) {
    case 1:
      addContact();
      break;
    case 2:
      printContact();
      break;
    case 3:
      editContact();
      break;
    case 4:
      deleteContact();
      break;
    case 5:
      searchContactByCity();
      break;
    case 6:
      loop = false;
      break;
    default:
      console.log("You entered wrong choice ..!! Plz try with valid one..!!");
      break;
  }
}
