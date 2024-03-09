const { BadRequestError } = require("../../shared/errors");
let Team = require("./team");
const AddTeam = async ({ body }) => {
  console.log(body);
  let { fullname, image, ...data } = body;

  let exstingteamUser = await Team.findOne({ fullname: fullname });
  if (exstingteamUser) {
    throw new BadRequestError("user already exsted");
  }
  let CreateTeam = await Team.create({
    fullname: fullname,
    image: "/uploads/" + image,
    ...data,
  });
  return { data: CreateTeam, message: "user created" };
};

module.exports = AddTeam;
