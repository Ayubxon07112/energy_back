const AllUsers = require("./all-users");
const express = require("express");
const UserRegister = require("./user-register");
const UserLogin = require("./user-login");
const FindUserMe = require("./finduser-me");
const UpdateUser = require("./update-user-all");
const UpdateUserMe = require("./update-user-me");
const DeleteUser = require("./delete-user");
const httpValidator = require("../../shared/http-validator/index");
const {
  postAddUserSchemas,
  postLoginUserSchemas,
  patchEditUserSchemas,
  deletetUserSchemas,
} = require("./_schemas");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const all_users = async (req, res, next) => {
  try {
    let result = await AllUsers();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const register_user = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postAddUserSchemas);
    let result = await UserRegister({ body: req.body });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const login_user = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postLoginUserSchemas);
    let result = await UserLogin({ body: req.body });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const user_me = async (req, res, next) => {
  try {
    let result = await FindUserMe({ user: req.user });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const update_user = async (req, res, next) => {
  try {
    httpValidator({ body: req.body, params: req.params }, patchEditUserSchemas);
    let result = await UpdateUser({ params: req.params, body: req.body });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const update_user_me = async (req, res, next) => {
  try {
    httpValidator({ body: req.body, params: req.params }, patchEditUserSchemas);
    let result = UpdateUserMe({ body: req.body, user: req.user });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const delete_user = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deletetUserSchemas);
    let result = DeleteUser({ params: req.params });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  all_users,
  register_user,
  login_user,
  user_me,
  update_user,
  update_user_me,
  delete_user,
};
