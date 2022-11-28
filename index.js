const contactsFunctions = require("./contacts");
const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsFunctions.listContacts();
      console.log(contacts);
      break;

    case "get":
      const contact = await contactsFunctions.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact);
      break;

    case "add":
      const newContact = await contactsFunctions.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
       const removeContact = await contactsFunctions.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
