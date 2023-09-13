const Persons = require('../model/Persons');

const deletePerson = async (req, res) => {
    //confirm if there's a request parameter
    if (!req?.params?.user_id) {
        return res.status(400).json({ message: "User ID required." })
    }
   try {
     //search for the user with the id in the database
     const foundPerson = await Persons.findOne({ _id: req.params.user_id });
     //if the user is not found
     if (!foundPerson) {
       return res.status(404).json({ message: "User with the ID not found." });
     }
     //if the user exists:
     const deletedPerson = await Persons.deleteOne({ _id: req.params.user_id });
     return res.status(200).json(deletedPerson);
   } catch (err) {
        console.log(err);
   }
};

module.exports = deletePerson;