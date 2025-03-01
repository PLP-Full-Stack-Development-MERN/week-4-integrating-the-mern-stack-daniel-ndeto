const mongoose = require('mongoose');

// Task schema 
const taskSchema = mongoose.Schema({

  title: { type: String, required: true },
  description: { type: String },
  status: { 
    type: String, 
    default: 'pending', 
    enum: ['pending', 'in progress', 'completed', 'cancelled', 'postponed'] 
  },
  dueDate: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
