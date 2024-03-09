const express = require("express");
const path = require("path");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const uploadFile = async (req, res, next) => {
  try {
    res.status(200).json({
      filename: req.file?.filename,
    });
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

const download_images = async (req, res, next) => {
  try {
    res.download(
      path.join(__dirname, "..", "..", "..", "uploads", req.params.filename),
    );
  } catch (error) {
    next(error);
  }
};

const upload_more_images = async (req, res, next) => {
  try {
    let filenames = req?.files?.map((e) => e.filename);
    res.status(200).json({ data: filenames });
  } catch (error) {
    next(error);
  }
};
module.exports = { uploadFile, download_images, upload_more_images };
