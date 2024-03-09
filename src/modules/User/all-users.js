const User = require("./User");

const AllUsers = async (req, res) => {
  const perPage = 1 ;
  const page = Math.max(0, req.params.page);

  try {
    const events = await User.find()
      .limit(perPage)
      .skip(perPage * page)
      .sort({
        name: 'asc'
      });
      
    const count = await User.count();

    res.status(200).send({
      events: events,
      page: page,
      pages: Math.ceil(count / perPage) 
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = AllUsers;
