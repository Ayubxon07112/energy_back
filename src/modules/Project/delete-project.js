const { NotFoundError } = require("../../shared/errors");
const Project = require("./Project");

const DeleteProjects = async ({ params }) => {
  let exstingProject = await Project.findById(params.id);
  if (!exstingProject) {
    throw new NotFoundError("Project not found");
  }

  await Project.findByIdAndDelete(params.id);
  return { message: "project deleted", data: exstingProject };
};

module.exports = DeleteProjects;
