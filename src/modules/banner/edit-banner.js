const { NotFoundError, BadRequestError } = require("../../shared/errors");
const { Banner } = require("./Banner");

const EditBanner = async ({ params, body }) => {
  let FindBanner = await Banner.findById(params.id);

  if (!FindBanner) {
    throw new NotFoundError("banner not found");
  }

  let updateObject = {
    title: body.title ? body.title : FindBanner.title,
    description: body.description ? body.description : FindBanner.description,
    image: body.image ? "/uploads/" + body.image : FindBanner.image,
  };

  let updateBanner = await Banner.findByIdAndUpdate(
    params.id,
    {
      ...updateObject,
    },
    { new: true },
  );

  return updateBanner;
};

module.exports = { EditBanner };
