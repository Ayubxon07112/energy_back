let mongoose = require("mongoose");

let type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

let CourseSchema = new mongoose.Schema({
  title: {
    ...type,
  },
  description: type,
  all_hour: {
    type: mongoose.SchemaTypes.Number,
  },

  all_videos: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Course",
    },
  ],

  course_users: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],

  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Author",
  },

  price: {
    type: mongoose.SchemaTypes.Number,
    required: true,
  },

  price_type: {
    type: mongoose.SchemaTypes.String,
    enum: ["uzs", "usd"],
    required: true,
  },

  course_start_date: {
    type: mongoose.SchemaTypes.Date,
  },
  course_end_date: {
    type: mongoose.SchemaTypes.Date,
  },
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
