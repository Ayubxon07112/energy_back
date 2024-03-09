const express = require("express");
const { AllTeams } = require("./all-teams");
const AddTeam = require("./add-team");
const DeleteTeams = require("./delete-team");
const UpdateTeam = require("./update-team");

const all_teams = async (req, res, next) => {
  try {
    let result = await AllTeams();
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

const add_team = async (req, res, next) => {
  try {
    let result = await AddTeam({ body: req.body });
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

const delete_team = async (req, res, next) => {
  try {
    let result = await DeleteTeams({ params: req.params });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const Update_team = async (req,res,next) => {
    try {
        let result = await UpdateTeam({body:req.body,params:rq.params})
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

module.exports = { all_teams, add_team, delete_team ,Update_team};
