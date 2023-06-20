const mongoose = require('mongoose');
const Strategy = require('./models/Strategy');

exports.handler = async function(event, context) {
  // Parse the form data
  const data = JSON.parse(event.body);

  // Fetch the strategy from the database
  const strategy = await Strategy.find({ answers: data });

  // Return the strategy
  return {
    statusCode: 200,
    body: JSON.stringify(strategy)
  };
};
