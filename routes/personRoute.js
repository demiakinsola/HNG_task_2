const { createPerson } = require('../controller/createPersonCtrl');
const fetchPerson = require('../controller/fetchPersonCtrl');
const updatedPerson = require('../controller/updatePersonCtrl');
const deletePerson = require('../controller/deletePersonCtrl');
const router = require('express').Router();

router.post('/', createPerson);
router.route('/:user_id')
        .get(fetchPerson)
        .put(updatedPerson)
        .delete(deletePerson)


module.exports = router;
