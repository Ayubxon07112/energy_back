const Project = require("./Project");

const allProject = async () => {
  let result = await Project.find();
  return { message: "all project", data: result };
};

module.exports = allProject;
