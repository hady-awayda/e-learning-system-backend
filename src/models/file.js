import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    filename: { type: String, required: true },
    originalname: { type: String, required: true },
    // comment this line if you want to use S3
    path: { type: String, required: true },
    // uncomment this line if you want to use S3
    // url: { type: String, required: true },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    updated_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    deleted_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    deleted_at: { type: Date, default: null },
  },
  { timestamps: true }
);

fileSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

const File = mongoose.model("File", fileSchema);

export default File;
