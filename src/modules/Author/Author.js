const mongoose = require("mongoose");

const type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const AuthorSChema = new mongoose.Schema({
  name: { ...type, unique: true },
  bio: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  email: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  image: type,
  role: {
    type: mongoose.SchemaTypes.String,
    enum: "author",
    default: "author",
  },
  write_course: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Course",
    },
  ],
});

const Author = mongoose.model("Author", AuthorSChema);
module.exports = Author;
