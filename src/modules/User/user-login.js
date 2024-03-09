const config = require("../../shared/config");
const { NotFoundError, ForbiddenError } = require("../../shared/errors/index");
const User = require("./User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateTokens = (payload) => {
  const accessToken = jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expirec_in,
  });
  return { accessToken };
};

const UserLogin = async ({ body }) => {
  let { phone_number, password } = body;

  let existingUser = await User.findOne({ phone_number });
  if (!existingUser) {
    throw new NotFoundError("not found user");
  }

  let is_correct = bcrypt.compareSync(password, existingUser.password);

  if (!is_correct) {
    throw new ForbiddenError("password incorrect");
  }

  const payload = {
    id: existingUser._id,
    role: existingUser.role,
  };
  const { accessToken } = generateTokens(payload);

  return  { token:accessToken };
};

module.exports = UserLogin;
