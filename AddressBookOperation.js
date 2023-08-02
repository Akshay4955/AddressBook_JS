const { Contact } = require("./Contact");
var readlineSync = require("readline-sync");
const myAddressBook = [];

const createContact = () => {
  contact = new Contact();
  contact.firstName = readlineSync.question("Enter first name of contact ");
  contact.lastName = readlineSync.question("Enter last name of contact ");
  contact.address = readlineSync.question("Enter address of contact ");
  contact.city = readlineSync.question("Enter city of contact ");
  contact.state = readlineSync.question("Enter state of contact ");
  contact.zip = readlineSync.question("Enter zip of contact ");
  contact.phoneNumber = readlineSync.question("Enter phone number of contact ");
  contact.email = readlineSync.question("Enter email of contact ");
  return contact;
};

const addContact = () => {
  let noOfCntacts = readlineSync.questionInt(
    "enter how many contacts you want to save : "
  );
  for (let i = 0; i < noOfCntacts; i++) {
    let contact = createContact();
    myAddressBook.push(contact);
  }
  console.log("After adding contacts : ");
  console.log(myAddressBook);
};

const edit = (contact) => {
  console.log(
    `Press 1 to change first name 
    Press 2 to change last name 
    Press 3 to change address 
    Press 4 to change city 
    Press 5 to change state 
    Press 6 to change zip 
    Press 7 to change phonenumber 
    Press 8 to change email`
  );
  let option = readlineSync.questionInt("What you want to edit : ");
  switch (option) {
    case 1:
      contact.firstName = readlineSync.question("enter first name to edit ");
      break;
    case 2:
      contact.lastName = readlineSync.question("enter last name to edit ");
      break;
    case 3:
      contact.address = readlineSync.question("enter adress to edit ");
      break;
    case 4:
      contact.city = readlineSync.question("enter city to edit ");
      break;
    case 5:
      contact.state = readlineSync.question("enter state to edit ");
      break;
    case 6:
      contact.zip = readlineSync.question("enter zip code to edit ");
      break;
    case 7:
      contact.phoneNumber = readlineSync.question("enter phone number to edit ");
      break;
    case 8:
      contact.email = readlineSync.question("enter email to edit ");
      break;
    default:
      console.log("You entered wrong choice ..!! Plz try with valid one.");
      break;
  }
};

const editContact = () => {
  let contactName = readlineSync.question(
    "Enter first name whose contact you want to edit : "
  );
  let status = true;
  for (let item of myAddressBook) {
    if (item.firstName === contactName) {
      edit(item);
      status = false;
      console.log("After editing contact : ");
      console.log(myAddressBook);
    }
  }
  if (status) {
    console.log("Contact not available with entered name. Plz try with valid contact name");
  }
};

const deleteContact = () => {
    let contactName = readlineSync.question(
      "Enter first name whose contact you want to delete "
    );
    for (let item in myAddressBook) {
      if (myAddressBook[item].firstName === contactName) {
        myAddressBook.splice(item, 1);
        console.log("After deleting contact : ");
        console.log(myAddressBook);
      }
    }
  };

const printContact = () => {
    console.log(myAddressBook);
}

const searchContactByCity = () => {
  let cityName = readlineSync.question("Plz enter city name to search ");
  const contactByCity = myAddressBook.filter(a => a.city === cityName)
  console.log("Contacts with given city are :");
  console.log(contactByCity);
}

module.exports = { editContact, addContact, printContact, deleteContact, searchContactByCity };

