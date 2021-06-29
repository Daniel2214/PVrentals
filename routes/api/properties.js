const express = require("express");
const jwtCheck = require("../../middleware/auth");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Property = require("../../models/Property");

// @route   POST api/properties
// @desc    Create a property
// @access  Private

router.post(
  "/",
  [
    jwtCheck,
    [
      check("user", "User email is required").isEmail().not().isEmpty(),
      check("title", "Title is required").not().isEmpty(),
      check("location", "Location is required").not().isEmpty(),
      check("status", "Status is required").not().isEmpty(),
      check("price", "Price is required").not().isEmpty(),
      check("currency", "Currency is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newProperty = {
        user: req.body.user,
        title: req.body.title,
        location: req.body.location,
        status: req.body.status,
        price: req.body.price,
        currency: req.body.currency,
        period: req.body.period,
      };

      if (req.body.description) {
        newProperty.description = req.body.description
          .split(",")
          .map((description) => description.trim());
      }

      const property = new Property(newProperty);
      await property.save();

      res.json(property);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   GET api/properties
// @desc    GET all properties
// @access  Public
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
