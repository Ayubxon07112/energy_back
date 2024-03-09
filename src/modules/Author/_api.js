const express = require("express");
const {
  all_authors,
  update_author,
  delete_author,
  add_author,
  find_author,
} = require("./_controller");

const { hasRole, isloggedIn } = require("../../shared/auth/index");

let router = express.Router();

// let MAllAuthors = [isloggedIn, hasRole(["admin", "super_admin",])];
let MUpdateAuthor = [isloggedIn, hasRole(["admin", "super_admin"])];
let MdelteAuthor = [isloggedIn, hasRole(["admin", "super_admin"])];
let MAddAuthor = [isloggedIn, hasRole(["admin", "super_admin"])];
let MFindAuthor = [isloggedIn, hasRole(["user", "admin", "super_admin"])];

router.get("/author", all_authors);
router.put("/author/:id", MUpdateAuthor, update_author);
router.delete("/author/:id", MdelteAuthor, delete_author);
router.post("/author", MAddAuthor, add_author);
router.get("/author/:id", MFindAuthor, find_author);

module.exports = router;
