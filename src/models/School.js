import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Employee",
    },
    name: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.School || mongoose.model("School", schoolSchema);
