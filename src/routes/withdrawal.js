import express from "express";
import userAuth from "../middleware/userAuthorization.js";
import adminAuth from "../middleware/adminAuthorization.js";
import WithdrawalController from "../controllers/withdrawalController.js";
import {
  setCreatedBy,
  setUpdatedBy,
  setDeletedBy,
} from "../middleware/trackChanges.js";

const router = express.Router();

router.get("/", adminAuth, WithdrawalController.getWithdrawals);
router.get("/:id", userAuth, WithdrawalController.getWithdrawal);
router.post("/", userAuth, setCreatedBy, WithdrawalController.createWithdrawal);
router.patch(
  "/:id",
  adminAuth,
  setUpdatedBy,
  WithdrawalController.updateWithdrawal
);
router.delete(
  "/:id",
  adminAuth,
  setDeletedBy,
  WithdrawalController.deleteWithdrawal
);

export default router;
