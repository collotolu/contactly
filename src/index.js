import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { router as authRoutes } from "./routes/auth.js";
import { router as contactRoutes } from "./routes/contact.js";
import { router as categoryRoutes } from "./routes/category.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`db is connected and server is running at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/category", categoryRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Contactly");
});
