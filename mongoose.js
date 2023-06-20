const mongoose = require('mongoose');

const StrategySchema = new mongoose.Schema({
  answers: {
    type: Object,
    required: true
  },
  tasks: {
    type: [String],
    required: true
  },
  recommendations: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('Strategy', StrategySchema);

