const express = require("express");
const isLoggedIn = require("../../shared/auth/isLoggedIn");
const {
  uploadFile,
  download_images,
  upload_more_images,
} = require("./_controller");
const { upload } = require("../../shared/config/multerconfig");

let router = express.Router();

router.post("/uploads/image", upload.single("image"), uploadFile);
router.post("/uploads/images", upload.array("images", 10), upload_more_images);
router.get("/uploads/download/:filename", download_images);

module.exports = router;
