import File from "../models/File.js";
import upload from "../config/s3.js";

const FileUploadController = {
  uploadFile: [
    upload.single("file"),
    async (req, res) => {
      try {
        const file = new File({
          filename: req.file.key,
          originalname: req.file.originalname,
          created_by: req.body.created_by,
          url: req.file.location,
        });
        await file.save();
        res.status(201).json({
          filename: req.file.key,
          originalname: req.file.originalname,
          url: req.file.location,
        });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },
  ],

  updateFile: async (req, res) => {
    try {
      const file = await File.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
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
      });
      if (!file) {
        return res.status(404).json({ message: "File not found" });
      }
      await s3
        .deleteObject({
          Bucket: process.env.S3_BUCKET_NAME,
          Key: file.filename,
        })
        .promise();
      res.status(200).json({ message: "File marked as deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getFile: async (req, res) => {
    try {
      const file = await File.findById(req.params.id);
      if (!file) {
        return res.status(404).json({ message: "File not found" });
      }
      res.redirect(file.url);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default FileUploadController;
