const AddCategory = require("./add-category");
let express = require("express");
const FindByID = require("./categoryfindid");
const DeleteCategory = require("./delete-categoru");
const UpdateCategory = require("./update-category");
const allCategorys = require("./all-category");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const add_category = async (req, res, next) => {
  try {
    let result = await AddCategory({ body: req.body });
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

let find_category = async (req, res, next) => {
  try {
    let result = await FindByID({ params: req.params });
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

const delete_category = async (req, res, next) => {
  try {
    let result = await DeleteCategory({ params: req.params });
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

const update_category = async (req, res, next) => {
  try {
    let result = await UpdateCategory({ params: req.params, body: req.body });
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

const all_category = async (req, res, next) => {
  try {
    let result = await allCategorys();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add_category,
  find_category,
  delete_category,
  update_category,
  all_category,
};
