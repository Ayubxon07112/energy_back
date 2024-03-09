let Team = require("./team");

const AllTeams = async () => {
  let result = await Team.find();
  return { messsage: "all team user", data: result };
};
module.exports = { AllTeams };
