const express = require("express");
const { ForbiddenError } = require("../errors");
const Admin = require("../../modules/admin/Admin");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const CheckAdmin = async (req, res, next) => {
  try {
    let FindAdmin = await Admin.findById(req.user.id);
    // console.log(FindAdmin);
    if (!FindAdmin) {
      throw new ForbiddenError("bundan hach qilib bolmaydi birodar");
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = CheckAdmin;
