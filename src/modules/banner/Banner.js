const mongoose = require("mongoose");

let BannerSChema = new mongoose.Schema({
  title: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  description: {
    type: mongoose.SchemaTypes.Mixed,
    required: true,
  },
  image: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  is_deleted: {
    type: mongoose.SchemaTypes.Boolean,
    default: false,
  },
});

let Banner = mongoose.model("Banner", BannerSChema);

module.exports = { Banner };
