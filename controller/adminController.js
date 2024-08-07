const Manager = require("../models/Manager");
// Get all managers and students
const getAllManagers = async (req, res) => {
  try {
    const managers = await Manager.find({}).select("-password -__v"); // exclude password and __v fields
    return managers;
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getAllManagers,
};
