const mongoose = require("mongoose");
let type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const ProjectSchema = new mongoose.Schema({
  title: { ...type },
  images: [type],
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "Category",
  },
  client: {
    ...type,
  },
  project_url: {
    ...type,
  },
  project_desc: {
    ...type,
  },
});

let Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
