const Contact = require("./Contact");

const AllContacts = async () => {
  let Contoacts = await Contact.find();
  return { data: Contoacts, message: "all contacts" };
};

module.exports = AllContacts;
