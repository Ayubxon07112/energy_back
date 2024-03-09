let { BadRequestError } = require("../../shared/errors");
const { Banner } = require("./Banner");
const AddBanner = async ({ body }) => {
  console.log(body);
  let { title, descrtion, image } = body;

  let exstingBanner = await Banner.findOne({ title });

  if (exstingBanner) {
    throw new BadRequestError("Banner already exsted!");
  }

  let createBanner = await Banner.create({
    title,
    image: "/uploads/" + image,
    descrtion,
  });

  return createBanner;
};

module.exports = {
  AddBanner,
};
