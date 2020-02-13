const express = require('express');
const router = express.Router();

module.exports = ({ getUsers, getQuotesForUser }) => {
  router.get('/', function(req, res) {
    getUsers()
      .then(result => {
        console.log(result);
        res.json(result);
      })
      .catch(err => console.log(`Error retrieving data: ${err.message}`));
  });

  router.get('/:id/quotes', (req, res) => {
    const { id } = req.params;
    getQuotesForUser(id)
      .then(result => res.json(result))
      .catch(err => console.log(err.message));
  });

  return router;
};
