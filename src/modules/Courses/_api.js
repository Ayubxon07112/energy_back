const express = require("express");
const {
  all_courses,
  add_courses,
  delete_course,
  find_course_id,
  update_course,
  buy_course,
} = require("./_controller");
const { hasRole, isloggedIn, CheckAdmin } = require("../../shared/auth/index");

let router = express.Router();

// let MallCourses = [isloggedIn, hasRole(["user", "admin", "super_admin"])];
let MAddCourses = [isloggedIn, hasRole(["admin", "super_admin"]),CheckAdmin];
let MDeleteCourses = [isloggedIn, hasRole(["admin", "super_admin"]),CheckAdmin];
let MFindCourses = [isloggedIn, hasRole(["admin", "super_admin", "user"])];
let MUpdateCourses = [isloggedIn, hasRole(["admin", "super_admin"]),CheckAdmin];
let MBuyCourses = [isloggedIn, hasRole(["user"])];

router.get("/courses", all_courses);
router.post("/courses", MAddCourses, add_courses);
router.delete("/courses/:id", MDeleteCourses, delete_course);
router.get("/courses/:id", MFindCourses, find_course_id);
router.put("/courses/:id", MUpdateCourses, update_course);
router.get("/courses/buy/:id", MBuyCourses, buy_course);

module.exports = router;
