const AddCourses = require("./add-courses");
const AllCourse = require("./all-course");
const express = require("express");
const DeleteCourse = require("./delete-course");
const FindByIdCourse = require("./coursesfindid");
const UpdateCourses = require("./updateCourses");
const BuyCourse = require("./buycourse");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const all_courses = async (req, res, next) => {
  try {
    let result = await AllCourse();
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

const add_courses = async (req, res, next) => {
  try {
    let result = await AddCourses({ body: req.body });
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

const delete_course = async (req, res, next) => {
  try {
    let result = await DeleteCourse({ params: req.params });
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

const find_course_id = async (req, res, next) => {
  try {
    let result = await FindByIdCourse({ params: req.params });
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

const update_course = async (req, res, next) => {
  try {
    let result = await UpdateCourses({ params: req.params, body: req.body });
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

const buy_course = async (req, res, next) => {
  try {
    let result = await BuyCourse({ params: req.params, user: req.user });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  all_courses,
  add_courses,
  delete_course,
  find_course_id,
  update_course,
  buy_course,
};
