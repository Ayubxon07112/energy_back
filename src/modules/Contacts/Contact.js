const mongoose = require("mongoose");
let type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

let ContactModel = new mongoose.Schema({
  fullname: type,
  tema: type,
  habar: type,
  email: type,
});

let Contact = mongoose.model("Contact", ContactModel);

module.exports = Contact;
