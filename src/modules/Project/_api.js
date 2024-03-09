const express = require("express");
const {
  all_project,
  add_project,
  delete_project,
  find_project,
  update_project,
} = require("./_controller");
const { isloggedIn, hasRole, CheckAdmin } = require("../../shared/auth");

let router = express.Router();

let AddProject = [isloggedIn, hasRole(["admin", "super_admin"]), CheckAdmin];
let DeleteProject = [isloggedIn, hasRole(["admin", "super_admin"]), CheckAdmin];
let UpdateProject = [isloggedIn, hasRole(["admin", "super_admin"]), CheckAdmin];

router.get("/project", all_project);
router.get("/project/:id", find_project);
router.post("/project", AddProject, add_project);
router.delete("/project/:id", DeleteProject, delete_project);
router.put("/project/:id", UpdateProject, update_project);

module.exports = router;
