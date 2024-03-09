const { NotFoundError } = require("../../shared/errors");
const Course = require("./Course");

const FindByIdCourse = async ({ params }) => {
  let exsitngCourse = await Course.findById(params.id);

  if (!exsitngCourse) {
    throw new NotFoundError("course not found");
  }

  return { message: `${exsitngCourse.title} deteil`, data: exsitngCourse };
};
module.exports = FindByIdCourse;
