const { BadRequestError } = require("../../shared/errors");
const User = require("./User");

const DeleteUser = async ({ params }) => {
  let exsitingUsers = await User.findById(params.id);

  if (!exsitingUsers) {
    throw new BadRequestError("user not found");
  }

  let deleteuser = await User.deleteOne(params.id);

  return { message: "user deleted :(", data: deleteuser };
};

module.exports = DeleteUser;
