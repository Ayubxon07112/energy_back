const { hashSync } = require("bcryptjs");

const admins = [
  {
    first_name: "ayubxon",
    last_name: "rahimov",
    image: "Jhon_Doe.png",
    role: "super_admin",
    username: "ayubxon",
    password: hashSync("Ayubxon0711", 10),
  },
  {
    first_name: "dostonbek",
    last_name: "Rahmatullayev",
    image: "Dostonbek.png",
    role: "super_admin",
    username: "dostonbek",
    password: hashSync("dostonbek99", 10),
  },
];

module.exports = admins;
