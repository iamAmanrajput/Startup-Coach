const Subscriber = require("../models/suscriber.model");

module.exports.subscribeUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res
        .status(400)
        .json({ success: false, message: "Name and email are required." });
    }

    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res
        .status(409)
        .json({ success: false, message: "Email is already subscribed." });
    }

    const newSubscriber = new Subscriber({ name, email });
    await newSubscriber.save();

    res
      .status(201)
      .json({ success: true, message: "Thank you for subscribing!" });
  } catch (error) {
    console.error("Subscription error:", error.message);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};
