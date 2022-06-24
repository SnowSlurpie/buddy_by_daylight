const User = require("./User");
const Build = require("./build");


User.hasMany(Build, {
  foreignKey: "user_id",
});



module.exports = { User, Build };