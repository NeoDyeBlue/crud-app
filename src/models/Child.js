import mongoose from "mongoose";

const ChildSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Child || mongoose.model("Child", ChildSchema);
