import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  name: { type: String, required:true },
  phone: { type: String, required:true, unique:true },
  email: { type: String, required:true },
  image: { type: String },
  category: { type: String, required:true },
});

export default mongoose.model("Contact", contactSchema);
