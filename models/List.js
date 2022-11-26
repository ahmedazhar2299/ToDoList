import mongoose from "mongoose";

const listSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      max : 100,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    isCompleted: {
      type: String,
      default : "false"
    },
  }
);

export default mongoose.model("List", listSchema);
