const Project = require("./Project");
let { BadRequestError } = require("../../shared/errors");
const Category = require("../Category/Category");
const AddProject = async ({ body }) => {
  let { title, category, images, ...data } = body;

  let exstingProject = await Project.findOne({ title });

  if (exstingProject) {
    throw new BadRequestError("project alredy exsist");
  }

  let exstingCategory = await Category.findById(category);
  if (!exstingCategory) {
    throw new BadRequestError("category not found");
  }
  let imagesf = images.map((e) => "/uploads/" + e);
  let NewProject = await Project.create({
    title,
    category,
    images: imagesf,
    ...data,
  });
  exstingCategory.projects.push(NewProject._id);
  exstingCategory.save();

  return { message: "project created", data: NewProject };
};

module.exports = AddProject;
