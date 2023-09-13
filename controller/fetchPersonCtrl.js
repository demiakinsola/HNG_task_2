const Persons = require("../model/Persons");

const fetchPerson = async (req, res) => {
  //check if there's a request parameter
  if (!req?.params?.user_id) {
    return res.status(400).json({ message: "User ID required." });
  }
  const { user_id } = req.params;
  try {
    //search for the user with the id in the database
    const foundPerson = await Persons.findOne({ _id: user_id });
    //if the person does not exist in the database
    if (!foundPerson) {
      return res.status(404).json({ message: "User not found." });
    }
    //if the person exists
    return res.status(200).json(foundPerson);
  } catch (err) {
    console.log(err);
  }
};
module.exports = fetchPerson;
