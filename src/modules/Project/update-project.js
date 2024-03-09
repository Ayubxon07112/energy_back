const { NotFoundError, BadRequestError } = require("../../shared/errors");
const Category = require("../Category/Category");
const Project = require("./Project");

const UpdateProject = async ({ body, params }) => {
  let { title, images, category, ...data } = body;

  let exstingProject = await Project.findById(params.id);

  if (!exstingProject) {
    throw new NotFoundError("Project not found");
  }
  let exstingCategoryTitle = await Project.findOne(title);

  if (exstingCategoryTitle) {
    throw new BadRequestError("project alredy exsist");
  }

  let exstingCategory = await Category.findById(category);
  if (!exstingCategory) {
    throw new NotFoundError("category not found");
  }
  let imagesf = images.map((e) => "/uploads/" + e);

  let NewObj = {
    title: body.title ? body.title : exstingProject.title,
    images: images ? imagesf : exstingProject.images,
    category: category ? category : exstingProject.category,
    client: body.client ? body.client : exstingProject.client,
    project_url: body.project_url
      ? body.project_url
      : exstingProject.project_url,
    project_desc: body.project_desc
      ? body.project_desc
      : exstingProject.project_desc,
  };
  let UpdatedProject = await Project.findByIdAndUpdate(params.id, NewObj, {
    new: true,
  });
  return { message: "updated project", data: UpdateProject };
};

module.exports = UpdateProject;
