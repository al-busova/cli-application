const fs = require("fs");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    console.log(JSON.parse(data));
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    const contacts = JSON.parse(data);
    const searchContact = [...contacts].find(
      (contact) => Number(contact.id) === contactId
    );
    console.log(searchContact);
  });
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
