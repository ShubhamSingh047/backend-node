const User = require("../models/user");

const handleUserSignUp = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });
  return res.render("Home");
};

module.exports = {
  handleUserSignUp,
};
