const express = require("express");
const {
  find_category,
  add_category,
  delete_category,
  update_category,
  all_category,
} = require("./_controller");
let { hasRole, isloggedIn, CheckAdmin } = require("../../shared/auth/index");
let router = express.Router();

let AddCategoryM = [isloggedIn, hasRole(["admin", "super_admin"]), CheckAdmin];
let DeleteCategoryM = [
  isloggedIn,
  hasRole(["admin", "super_admin"]),
  CheckAdmin,
];
let UpdateCategoryM = [
  isloggedIn,
  hasRole(["admin", "super_admin"]),
  CheckAdmin,
];

router.get("/category", all_category);
router.get("/category/:id", find_category);
router.post("/category", AddCategoryM, add_category);
router.delete("/category/:id", DeleteCategoryM, delete_category);
router.put("/category/:id", UpdateCategoryM, update_category);

module.exports = router;
