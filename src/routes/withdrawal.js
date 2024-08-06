import express from "express";
import userAuthorization from "../middleware/adminAuthorization.js";
import adminAuthorization from "../middleware/adminAuthorization.js";
import {
  setCreatedBy,
  setUpdatedBy,
  setDeletedBy,
} from "../middleware/trackChanges.js";
import WithdrawalController from "../controllers/WithdrawalController.js";

const router = express.Router();

router.get("/", adminAuthorization, WithdrawalController.getWithdrawals);
router.get("/:id", userAuthorization, WithdrawalController.getWithdrawal);
router.post(
  "/",
  userAuthorization,
  setCreatedBy,
  WithdrawalController.createWithdrawal
);
router.patch(
  "/:id",
  adminAuthorization,
  setUpdatedBy,
  WithdrawalController.updateWithdrawal
);
router.delete(
  "/:id",
  adminAuthorization,
  setDeletedBy,
  WithdrawalController.deleteWithdrawal
);

export default router;
