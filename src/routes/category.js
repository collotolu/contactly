import { Router } from "express";
import Category from "../models/category.js";

const router = Router();

router.post("/new", async (req, res) => {
  const { name, description } = req.body;
  try {
    const categories = await Category.findOne({ name });
    if (categories) {
      res.status(400).json({ messege: "Name already exists" });
    }
    const createCategory = new Category({
      name,
      description,
    });
    const saveCategory = await createCategory.save();
    res.status(201).json(saveCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

export { router };
