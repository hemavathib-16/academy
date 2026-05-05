const Admission = require("../models/Admission");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Phone validation: Exactly 10 digits (Indian mobile number format)
const phoneRegex = /^\d{10}$/;
// Date validation: Year must be exactly 4 digits (YYYY-MM-DD format)
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

const createAdmission = async (req, res, next) => {
  try {
    const payload = req.body;
    const requiredFields = [
      "name",
      "dob",
      "gender",
      "phone",
      "email",
      "education",
      "course",
      "fatherName",
      "motherName",
      "parentPhone",
    ];

    const missingField = requiredFields.find((field) => !payload[field]);
    if (missingField) {
      return res.status(400).json({ message: `${missingField} is required.` });
    }

    if (!emailRegex.test(payload.email)) {
      return res.status(400).json({ message: "Please provide a valid email." });
    }

    if (!phoneRegex.test(payload.phone)) {
      return res.status(400).json({ message: "Student phone must be exactly 10 digits." });
    }

    if (!phoneRegex.test(payload.parentPhone)) {
      return res.status(400).json({ message: "Parent phone must be exactly 10 digits." });
    }

    if (!dateRegex.test(payload.dob)) {
      return res.status(400).json({ message: "Date of birth must be in YYYY-MM-DD format with exactly 4-digit year." });
    }

    const admission = await Admission.create(payload);
    return res.status(201).json({
      message: "Admission application submitted successfully.",
      data: admission,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { createAdmission };
