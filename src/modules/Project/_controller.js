const AddProject = require("./add-project");
const allProject = require("./all-project");
let express = require("express");
const DeleteProjects = require("./delete-project");
const FindProject = require("./find-project");
const UpdateProject = require("./update-project");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const all_project = async (req, res, next) => {
  try {
    let result = await allProject();
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

const add_project = async (req, res, next) => {
  try {
    let result = await AddProject({ body: req.body });
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

const delete_project = async (req, res, next) => {
  try {
    let result = await DeleteProjects({ params: req.params });
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

const find_project = async (req, res, next) => {
  try {
    let result = await FindProject({ params: req.params });
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

const update_project = async (req, res, next) => {
  try {
    let result = await UpdateProject({ params: req.params, body: req.body });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  all_project,
  add_project,
  delete_project,
  find_project,
  update_project,
};
