const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  instituteName: {
    type: String,
    required: true,
  },
  issueDate: {
    type: Date,
    required: true,
  },
  certificateId: {
    type: String,
    required: true,
    unique: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Certificate", certificateSchema);