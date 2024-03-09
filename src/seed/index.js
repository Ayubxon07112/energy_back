const mongoose = require("mongoose");
const config = require("../shared/config");

const Admin = require("../modules/admin/Admin");

const AdminSeed = require("./admin-seed");

const seedData = async () => {
  const uri = `mongodb+srv://rahimovayubxon48:ZSoQZkbsdWfkRHY2@birornima.tfdmd6d.mongodb.net/`;
  mongoose.set("strictQuery", false);
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log("error", err);
    });

  const seedDB = async () => {
    await Admin.deleteMany({});
    await Admin.insertMany(AdminSeed);
  };

  seedDB().then(() => {
    mongoose.connection.close();
  });
};

seedData();
