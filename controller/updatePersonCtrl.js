const Persons = require('../model/Persons');

const updatePerson = async (req, res) => {
  //check if there's a request
  if (!req?.params?.user_id) {
    return res.status(400).json({ message: "User ID required." });
  }
  //check if there's a request body containing the values to be updated
  if (!req?.body?.fullName) {
    return res.status(400).json({ message: "Value to be updated not found." });
  }
  const { user_id } = req.params;
  //search for the user with the id in the database
 try {
  const foundPerson = await Persons.findOne({ _id: user_id });
 //confirm if the user exists in the database
 if (!foundPerson) {
   return res.status(404).json({ message: "User not found." });
 }
 //if the user exists:
 if (req.body.fullName) {
  //check if the name already exists
  const existingName = await Persons.findOne({ name: req.body.fullName })
  if (existingName) {
    return res.status(409).json({ message: "Name already exists. Try another name. "})
  }
   foundPerson.name = req.body.fullName;
 }
 const updatedPerson = await foundPerson.save();
 return res.status(200).json(updatedPerson);
 } catch (err) {
    console.log(err);
 }
};

module.exports = updatePerson;