const ContactInquiry = require("../models/ContactInquiry");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const createContactInquiry = async (req, res, next) => {
  try {
    const { name, email, phone = "", course = "", message = "" } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "name and email are required." });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Please provide a valid email." });
    }

    const inquiry = await ContactInquiry.create({
      name,
      email,
      phone,
      course,
      message,
    });

    return res.status(201).json({
      message: "Contact inquiry submitted successfully.",
      data: inquiry,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { createContactInquiry };
