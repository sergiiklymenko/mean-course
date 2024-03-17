const mongoose = require("mongoose");
const uniqueValiadtor = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValiadtor);

module.exports = mongoose.model("User", userSchema);
