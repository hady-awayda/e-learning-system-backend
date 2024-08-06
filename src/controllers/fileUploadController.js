import File from "../models/File.js";
import multer from "multer";
import path from "path";
import fs from "fs";

const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 10000000 }, // 10 MB limit
  fileFilter(req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext !== ".pdf" && ext !== ".doc" && ext !== ".docx") {
      return cb(new Error("Only .pdf, .doc, and .docx files are allowed"));
    }
    cb(null, true);
  },
});

const FileUploadController = {
  uploadFile: [
    upload.single("file"),
    async (req, res) => {
      const file = new File({
        filename: req.file.filename,
        originalname: req.file.originalname,
        created_by: req.body.created_by,
      });
      await file.save();
      res.status(201).json({
        filename: req.file.filename,
        originalname: req.file.originalname,
      });
    },
  ],

  getFiles: async (req, res) => {
    try {
      const files = await File.find();
      res.status(200).json(files);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // fix this method
  getFile: async (req, res) => {
    const file = await File.findById(req.params.id);
    const filePath = `uploads/${file.filename}`;
    try {
      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ message: "File not found" });
      }
      res.sendFile(filePath);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  updateFile: async (req, res) => {
    try {
      const file = await File.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!file) {
        return res.status(404).json({ message: "File not found" });
      }
      res.status(200).json(file);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  deleteFile: async (req, res) => {
    try {
      const file = await File.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!file) {
        return res.status(404).json({ message: "File not found" });
      }
      res.status(200).json({ message: "File marked as deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default FileUploadController;
