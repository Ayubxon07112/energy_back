const express = require("express");
const { add_question, all_question, delete_question, update_question } = require("./_controller");
const {CheckAdmin,isloggedIn,hasRole} = require("../../shared/auth")
let router = express.Router();

let DeleteQuestionM = [isloggedIn,hasRole(["admin","super_admin"]),CheckAdmin]
let UpdateQuestionM = [isloggedIn,hasRole(["admin","super_admin"]),CheckAdmin]

router.post("/question", add_question);
router.get("/question", all_question);
router.delete("question/:id",DeleteQuestionM,delete_question)
router.put("/question/:id",UpdateQuestionM,update_question)

module.exports = router;
