const express = require("express");
const AllContacts = require("./all-contact");
const AddContact = require("./add-contact");
const DeleteContact = require("./delete-contact");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const all_contacts = async (req, res, next) => {
  try {
    let result = AllContacts();
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

const add_contacts = async (req, res, next) => {
  try {
    let result = AddContact({ body: req.body });
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

const delete_contacts = async (req, res, next) => {
  try {
    let result = await DeleteContact({ params: req.params });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { all_contacts, add_contacts, delete_contacts };
