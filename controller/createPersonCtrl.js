const Persons = require('../model/Persons');

const createPerson = async (req, res) => {
  //confirm if there is a name parameter or a request body
  if (!req?.body?.fullName) {
    return res.status(400).json({ message: "Name parameter not found in the request." });
  }
  //get the name parameter from the request body
  const { fullName } = req.body;
  //check if the person already exists
 try {
 const foundPerson = await Persons.findOne({ name: fullName });
  //if the person exists in the database
  if (foundPerson) {
    return res.status(409).json({ message: "This person already exists in the database." })
  }
  //if the person does not exist in the database
  const newPerson = await Persons.create({
    name: fullName
  })
  return res.status(200).json(newPerson);
 } catch (err) {
  console.log(err);
 }
}

module.exports = { createPerson };