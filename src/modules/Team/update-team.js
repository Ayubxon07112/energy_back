const { NotFoundError, BadRequestError } = require("../../shared/errors");
const Team = require("./team");

const UpdateTeam = async ({ body, params }) => {
    
    let exstingTeams = await Team.findById(params.id)

    if (!exstingTeams) {
        throw new NotFoundError("team not found")
    }
    let exstingTeamsname = await Team.findOne(body.fullname)

    if (exstingTeamsname) {
        throw new BadRequestError("user elredy exsist")
    }
    
    let newObj = {
        fullname:body.fullname?body.fullname: exstingTeams.fullname,
        company_role:body.company_role ? body.company_role : exstingTeams.company_role,
        phone_number:body.phone_number ? body.phone_number : exstingTeams.phone_number,
        password:body.password ? body.password : exstingTeams.password,
        link:{
            twitter:body.twitter? body.twitter : exstingTeams.link.twitter,
            instagram:body.instagram? body.instagram : exstingTeams.link.instagram,
            facebook:body.facebook? body.facebook : exstingTeams.link.facebook,
            linkidin:body.linkidin? body.linkidin : exstingTeams.link.linkidin,
        },
        bio:body.bio ? body.bio : exstingTeams.bio,
        image:body.image ? body.image : exstingTeams.image
    }

    let UpdatedTeames = await Team.findByIdAndUpdate(params.id,newObj,{new:true})
    return {message:"team updated",data:UpdatedTeames}
};

module.exports = UpdateTeam
