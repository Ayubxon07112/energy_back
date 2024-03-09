const { NotFoundError, ForbiddenError } = require("../../shared/errors");
const Author = require("../Author/Author");
const Course = require("./Course");

const AddCourses = async ({ body }) => {
  let { title, auhtor, ...rest } = body;

  let exstingCourse = await Course.findOne({ title });
  console.log(exstingCourse);
  if (exstingCourse) {
    throw new ForbiddenError("courses alredy exsted");
  }

  let exsistAuthor = Author.findById(auhtor);

  if (!exsistAuthor) {
    throw new NotFoundError("author not found");
  }

  let createCourse = await Course.create({ title, author: auhtor, ...rest });

  return { data: createCourse, message: "Courses created" };
};

module.exports = AddCourses;
