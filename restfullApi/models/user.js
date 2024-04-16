const users = require("../MOCK_DATA.json");

const userSchema = new mongoose.Schema(
    {
      firstName: {
        type: String,
        require: false,
      },
      lastName: {
        type: String,
        require: false,
      },
      email: {
        type: String,
        require: true,
        unique: true,
      },
      jobtitile: {
        type: String,
      },
      gender: {
        type: String,
      },
    },
    { timestamps: true }
  );

const User = mongoose.model("user",userSchema)
module.exports=User;