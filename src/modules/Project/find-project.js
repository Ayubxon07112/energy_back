const { NotFoundError } = require("../../shared/errors");
const Project = require("./Project");

const FindProject = async ({ params }) => {
  let exstingProject = await Project.findById(params.id);
  if (!exstingProject) {
    throw new NotFoundError("Project not found");
  }
  return { message: "project deteil", data: exstingProject };
};
module.exports = FindProject;
