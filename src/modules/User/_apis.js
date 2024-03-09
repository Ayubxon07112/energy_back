const express = require("express");
const {
  all_users,
  register_user,
  login_user,
  user_me,
  update_user,
  update_user_me,
  delete_user,
} = require("./_controller");

const {
  hasRole,
  isloggedIn,
  CheckAdmin,
} = require("../../shared/auth/index");

const AllUsers = require("./all-users");
let router = express.Router();

let MAllUsers = [isloggedIn, hasRole(["admin", "super_admin"]),CheckAdmin];
let MUsersMe = [isloggedIn, hasRole(["user"])];
let MUpdateUser = [isloggedIn, hasRole(["admin", "super_admin"]),CheckAdmin];
let MUpdateUserMe = [isloggedIn, hasRole(["user"])];
let MdelteUser = [isloggedIn, hasRole(["admin", "super_admin"]),CheckAdmin];

router.get("/users", AllUsers);
router.post("/user/auth/register", register_user);
router.post("/user/auth/login", login_user);
router.get("/users/me", MUsersMe, user_me);
router.put("/user/:id", MUpdateUser, update_user);
router.put("/user/me", MUpdateUserMe, update_user_me);
router.delete("/user/:id", MdelteUser, delete_user);

module.exports = router;
