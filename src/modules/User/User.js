const mongoose = require("mongoose");

const type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};
const UserSChema = new mongoose.Schema({
  fullname: type,
  phone_number: {
    type: mongoose.SchemaTypes.Number,
    required: true,
    unique: true,
  },

  password: type,
  courses: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Courses",
      default: null,
    },
  ],
  image: type,
  role: {
    type: mongoose.SchemaTypes.String,
    enum: "user",
    default: "user",
  },
});

const User = mongoose.model("User", UserSChema);
module.exports = User;
