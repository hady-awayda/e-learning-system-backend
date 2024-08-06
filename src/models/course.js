import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
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

courseSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
