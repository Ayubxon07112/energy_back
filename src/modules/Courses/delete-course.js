const { NotFoundError } = require("../../shared/errors");
const Course = require("./Course");

const DeleteCourse = async ({ params }) => {
  let exsitngCourse = await Course.findById(params.id);

  if (!exsitngCourse) {
    throw new NotFoundError("Course not found");
  }

  await Course.findByIdAndDelete(exsitngCourse._id);

  return { data: null, message: "couse delete" };
};

module.exports = DeleteCourse;
