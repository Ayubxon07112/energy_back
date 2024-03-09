const mongoose = require("mongoose");

let type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

let TeamSchema = new mongoose.Schema({
  fullname: {
    ...type,
  },
  role: {
    type: mongoose.SchemaTypes.String,
    enum: ["team"],
    default: "team",
  },
  company_role: {
    ...type,
    enum: [
      "chief",
      "Product Manager",
      "Accountant",
      "developer",
      "marketing",
      "bos",
    ],
    default: "chief",
  },
  phone_number: {
    type: mongoose.SchemaTypes.Number,
    required: true,
  },
  password: {
    ...type,
  },
  link: {
    twitter: {
      type: mongoose.SchemaTypes.String,
      default: null,
    },
    instagram: {
      type: mongoose.SchemaTypes.String,
      default: null,
    },
    facebook: {
      type: mongoose.SchemaTypes.String,
      default: null,
    },
    linkidin: {
      type: mongoose.SchemaTypes.String,
      default: null,
    },
  },
  bio: {
    ...type,
  },
  image: {
    ...type,
  },
});

let Team = mongoose.model("Team", TeamSchema);
module.exports = Team;
