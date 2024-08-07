import File from "../models/File.js";

const fileUploadController = {
  getFiles: async (req, res) => {
    console.log("Hello from the server");
    try {
      const files = await File.find();
      res.status(200).json(files);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default fileUploadController;
