import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: { type: String, requiered: true, unique: true },
  description: { type: String, requiered: true },
});

export default mongoose.model("Category", categorySchema);
