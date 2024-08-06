import Withdrawal from "../models/Withdrawal.js";

const WithdrawalController = {
  getWithdrawals: async (req, res) => {
    try {
      const withdrawals = await Withdrawal.find();
      res.status(200).json(withdrawals);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getWithdrawal: async (req, res) => {
    try {
      const withdrawal = await Withdrawal.findById(req.params.id);
      if (!withdrawal) {
        return res.status(404).json({ message: "Withdrawal not found" });
      }
      res.status(200).json(withdrawal);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createWithdrawal: async (req, res) => {
    try {
      const withdrawal = new Withdrawal(req.body);
      await withdrawal.save();
      res.status(201).json(withdrawal);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  updateWithdrawal: async (req, res) => {
    try {
      const withdrawal = await Withdrawal.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!withdrawal) {
        return res.status(404).json({ message: "Withdrawal not found" });
      }
      res.status(200).json(withdrawal);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  deleteWithdrawal: async (req, res) => {
    try {
      const withdrawal = await Withdrawal.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!withdrawal) {
        return res.status(404).json({ message: "Withdrawal not found" });
      }
      res.status(200).json({ message: "Withdrawal marked as deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default WithdrawalController;
