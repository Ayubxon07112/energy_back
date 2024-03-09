const Course = require("./Course");

const AllCourse = async () => {
  let AllCourses = await Course.find();
  return { data: AllCourses, message: "all courses" };
};

module.exports = AllCourse;
