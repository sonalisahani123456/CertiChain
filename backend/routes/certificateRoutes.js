const express = require("express");
const router = express.Router();
const Certificate = require("../models/Certificate");

// CREATE Certificate
router.post("/add", async (req, res) => {
  try {
    const newCertificate = new Certificate(req.body);
    const savedCertificate = await newCertificate.save();

    res.status(201).json({
      message: "Certificate Created Successfully",
      data: savedCertificate,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating certificate",
      error: error.message,
    });
  }
});

// VERIFY Certificate by certificateId
router.get("/verify/:id", async (req, res) => {
  try {
    const certificate = await Certificate.findOne({
      certificateId: req.params.id,
    });

    if (!certificate) {
      return res.status(404).json({
        message: "Certificate Not Found ❌",
      });
    }

    res.status(200).json({
      message: "Certificate Verified ✅",
      data: certificate,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error verifying certificate",
      error: error.message,
    });
  }
});

module.exports = router;