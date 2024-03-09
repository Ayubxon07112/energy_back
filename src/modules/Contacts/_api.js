const express = require("express");
const {
  all_contacts,
  add_contacts,
  delete_contacts,
} = require("./_controller");
const isLoggedIn = require("../../shared/auth/isLoggedIn");
const { hasRole,CheckAdmin } = require("../../shared/auth");

let router = express.Router();

let MallContacts = [isLoggedIn, hasRole(["admin", "super_admin"]),CheckAdmin];
let MAddContact = [isLoggedIn, hasRole(["admin", "super_admin"]),CheckAdmin];
let MDeleteContact = [isLoggedIn, hasRole(["admin", "super_admin"]),CheckAdmin];

router.get("/contact", MallContacts, all_contacts);
router.post("/contact", MAddContact, add_contacts);
router.delete("/contact/:id", MDeleteContact, delete_contacts);

module.exports = router;
