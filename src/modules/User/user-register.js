const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { BadRequestError, NotFoundError } = require("../../shared/errors");
const User = require("./User");
const fs = require("fs");
const path = require("path");
const config = require("../../shared/config");

const generateTokens = (payload) => {
  const accessToken = jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expirec_in,
  });
  return { accessToken };
};

const UserRegister = async ({ body }) => {
  let { fullname, phone_number, password, image } = body;

  let existingUser = await User.findOne({ fullname });
  if (existingUser) {
    throw new BadRequestError(
      "Fullname already exists. Please choose a different fullname.",
    );
  }

  existingUser = await User.findOne({ phone_number });
  if (existingUser) {
    throw new BadRequestError(
      "Phone number already exists. Please choose a different phone number.",
    );
  }

  let file = fs.existsSync(
    path.join(__dirname, "..", "..", "..", "uploads", image),
  );
  if (!file) {
    throw new NotFoundError("Image not found");
  }

  const hashedPassword = await bcrypt.hashSync(password, 10);
  let newUser = await User.create({
    fullname,
    phone_number,
    password: hashedPassword,
    image: `/uploads/${image}`,
  });

  const payload = {
    id: newUser._id,
    role: newUser.role,
  };

  const { accessToken } = generateTokens(payload);

  return { token:accessToken };
};

module.exports = UserRegister;
