const Bill = require('../models/Bill');

exports.createBill = async (req, res) => {
  try {
    const bill = new Bill(req.body);
    await bill.save();
    res.status(201).json({ message: 'Bill saved successfully', bill });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.getBills = async (req, res) => {
  try {
    const bills = await Bill.find();
    res.status(200).json(bills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};