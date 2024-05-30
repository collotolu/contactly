import { Router } from "express";
import Contact from "../models/contact.js";
const router = Router();

router.post("/new", async (req, res) => {
  const { name, phone, email, category, image } = req.body;
  try {
    const contact = await Contact.findOne({ phone });
    if (contact) {
      res.status(400).json({ messege: "Contact Already Exists" });
    }

    const createContact = new Contact({
      name,
      phone,
      image,
      email,
      category,
    });

    const savedContact = await createContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    return res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    return res.status(200).json(contact);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, email, category, image } = req.body;
    const update = {
      name,
      email,
      category,
      phone,
      image,
    };
    const updatedContact = await Contact.findOneAndUpdate({ _id: id }, update, {
      new: true,
    });
    return res.status(200).json(updatedContact);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteContact = await Contact.findOneAndDelete({ _id: id });
    return res.status(200).json(deleteContact);
  } catch (error) {
    return res.status(500).json(error);
  }
});

export { router };
