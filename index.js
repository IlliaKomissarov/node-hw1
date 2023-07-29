const argv = require("yargs").argv;
const logger = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await logger.listContacts();
      console.table(allContacts);
      break;
    case "get":
      const findByID = await logger.getContactById(id);
      console.log(findByID);
      break;
    case "remove":
      const delByID = await logger.removeContact(id);
      console.log(delByID);
      break;
    case "add":
      const newContact = await logger.addContact(name, email, phone);
      console.log(newContact);
      break;
    default:
      console.log("Unknow actions");
  }
};

invokeAction(argv);
