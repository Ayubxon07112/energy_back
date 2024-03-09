const mongoose = require("mongoose");
let type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

let CategorySchema = new mongoose.Schema({
  title: {
    ...type,
  },
  projects: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Project",
    },
  ],
});

let Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
