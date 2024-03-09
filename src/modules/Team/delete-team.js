const { NotFoundError } = require("../../shared/errors");
let Team = require("./team");

const DeleteTeams = async ({ params }) => {
  let exstingTeams = await Team.findById(params.id);

  if (!exstingTeams) {
    throw new NotFoundError("not found team user");
  }

  await Team.findByIdAndDelete(params.id);

  return { message: "team deleted ", data: exstingTeams };
};

module.exports = DeleteTeams;
