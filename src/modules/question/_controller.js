const express = require("express");
const AddQuestion = require("./AddQuestion");
const AllQuestion = require("./all-question");
const DeleteQuestion = require("./delete-question");
const UpdateQuestion = require("./Update-question");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const add_question = async (req, res, next) => {
  try {
    let result = await AddQuestion({ body: req.body });
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

const all_question = async (req, res, next) => {
  try {
    let result = await AllQuestion();
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

const delete_question = async (req,res,next) => {
  try {
    let result = await DeleteQuestion({params:req.params})
    re.status(201).json(result)
  } catch (error) {
    next(error)
  }
}


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */

const update_question = async (req,res,next) => {
  try {
    let result = await UpdateQuestion({body:req.body,params:req.params})
    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
}
module.exports = { add_question, all_question,delete_question,update_question };
