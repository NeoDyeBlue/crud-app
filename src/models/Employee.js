import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    civilStatus: {
      type: String,
      required: true,
      enum: ["single", "married", "separated", "widowed"],
    },
    address: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#ba2222",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Employee ||
  mongoose.model("Employee", EmployeeSchema);
