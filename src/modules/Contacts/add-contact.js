const { ForbiddenError } = require("../../shared/errors");
const Contact = require("./Contact");

const AddContact = async ({ body }) => {
  let { habar, ...rest } = body;
  let exsitngContact = await Contact.findOne({ habar });

  if (exsitngContact) {
    throw new ForbiddenError("message already exsist )");
  }
  let newContact = await Contact.create({ habar, ...rest });
  return { data: newContact, message: "created" };
};

module.exports = AddContact;
