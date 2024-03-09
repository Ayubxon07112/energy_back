const { NotFoundError } = require("../../shared/errors");
const Contact = require("./Contact");

const DeleteContact = async ({ params }) => {
  let exstingContact = await Contact.findById(params.id);

  if (!exstingContact) {
    throw new NotFoundError("not found Contact");
  }

  await Contact.findByIdAndDelete(params.id);
  return { data: exstingContact, message: "deleted " };
};
module.exports = DeleteContact;
