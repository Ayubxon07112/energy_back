const Allauthors = require("./all-auhtors");
const express = require("express");
const Updateauthor = require("./update-author-all");
const Deleteauthor = require("./delete-author");
const httpValidator = require("../../shared/http-validator/index");
const {
  postAddauthorSchemas,
  patchEditauthorSchemas,
  deletetauthorSchemas,
} = require("./_schemas");
const AddAuthor = require("./add-author");
const FIndById = require("./authorfindbyid");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const all_authors = async (req, res, next) => {
  try {
    let result = await Allauthors();
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

const update_author = async (req, res, next) => {
  try {
    httpValidator(
      { body: req.body, params: req.params },
      patchEditauthorSchemas,
    );
    let result = await Updateauthor({ params: req.params, body: req.body });
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

const delete_author = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deletetauthorSchemas);
    console.log(req.params);
    let result = await Deleteauthor({ params: req.params });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const add_author = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postAddauthorSchemas);
    let result = await AddAuthor({ body: req.body });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const find_author = async (req, res, next) => {
  try {
    let result = await FIndById({ params: req.params });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  all_authors,
  update_author,
  delete_author,
  add_author,
  find_author,
};
