const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../../shared/errors/index");
const config = require("../../shared/config/index");
const User = require("./User");

const refreshAccessToken = async (req, res, next) => {
  try {
    const refreshToken = req.headers.authorization;

    if (!refreshToken) {
      throw new UnauthorizedError("Refresh token not found");
    }

    const decoded = jwt.verify(refreshToken, config.jwt.refreshSecret);

    const user = await User.findById(decoded.id);

    if (!user) {
      throw new UnauthorizedError("User not found.");
    }
    j;

    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      config.jwt.secret,
      { expiresIn: config.jwt.expirec_in },
    );

    res.status(200).json({ accessToken });
  } catch (error) {
    next(new UnauthorizedError(error.message));
  }
};

module.exports = refreshAccessToken;
