const mongoose = require("mongoose");
const config = require("../shared/config");

const db = () => {
  mongoose
    .connect(
      `mongodb+srv://rahimovayubxon48:ZSoQZkbsdWfkRHY2@birornima.tfdmd6d.mongodb.net/`,
    )
    .then(() => {
      console.log("SERVER HAS BEEN CONNECTED TO DATABASE SUCCESSFULL");
    })
    .catch(() => {
      console.log("SERVER CAN NOT CONNECT TO DATABASE");
    });
};

module.exports = db;
