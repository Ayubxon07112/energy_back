const { NotFoundError } = require("../../shared/errors");
const User = require("../User/User");
const Course = require("./Course");

const BuyCourse = async ({ params, user }) => {
  let exstingCourse = await Course.findById(params.id);

  if (!exstingCourse) {
    throw new NotFoundError("course not found");
  }

  let exsistUser = await User.findById(user.id);

  if (!exsistUser) {
    throw new NotFoundError("user not found");
  }

  let exsistCourse = await User.findById(user.id, {
    $and: [{ courses: { $elemMatch: { $eq: params.id } } }],
  });
  if (!exsistCourse) {
    await exsistCourse.courses.push(params.id);
    await exsistCourse.save();
  }
  let exsitsUserc = await Course.findById(params.id, {
    $and: [{ course_users: { $elemMatch: { $eq: user.id } } }],
  });

  if (!exsitsUserc) {
    await exsitsUserc.course_users.push(user.id);
    await exsitsUserc.save();
  }

  return { data: null, message: "user buyed course thank you " };
};

module.exports = BuyCourse;
