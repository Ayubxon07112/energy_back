const { NotFoundError } = require("../../shared/errors");
const Course = require("./Course");

const UpdateCourses = async ({ params, body }) => {
  let exsitngCourse = await Course.findById(params.id);

  if (!exsitngCourse) {
    throw new NotFoundError("course not found");
  }

  let newObj = {
    title: body.title ? body.title : exsitngCourse.title,
    description: body.description
      ? body.description
      : exsitngCourse.description,
    all_hour: body.all_hour ? body.all_hour : exsitngCourse.all_hour,
    author: body.author ? body.author : exsitngCourse.author,
    description_videos: body.description_videos
      ? body.description_videos
      : exsitngCourse.description_videos,
    price: body.price ? body.price : exsitngCourse.price,
    price_type: body.price_type ? body.price_type : exsitngCourse.price_type,
    course_start_date: body.course_start_date
      ? body.course_start_date
      : exsitngCourse.course_start_date,
    course_end_date: body.course_end_date
      ? body.course_end_date
      : exsitngCourse.course_end_date,
  };

  let UpdateCourse = await Course.findByIdAndUpdate(
    params.id,
    { ...newObj },
    { new: true },
  );
  return { data: UpdateCourse, message: "user updated nice job developer )" };
};
module.exports = UpdateCourses;
