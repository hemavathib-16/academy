const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    dob: {
      type: Date,
      required: true,
      validate: {
        validator: function (v) {
          // Ensure year is 4 digits and valid date
          const year = v.getFullYear();
          return year >= 1900 && year <= new Date().getFullYear() && year.toString().length === 4;
        },
        message: "Date of birth year must contain exactly 4 digits (between 1900 and current year).",
      },
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: "Phone number must be exactly 10 digits.",
      },
    },
    email: { type: String, required: true, lowercase: true, trim: true },
    education: { type: String, required: true, trim: true },
    course: { type: String, required: true, trim: true },
    fatherName: { type: String, required: true, trim: true },
    motherName: { type: String, required: true, trim: true },
    parentPhone: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: "Parent phone number must be exactly 10 digits.",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admission", admissionSchema);
