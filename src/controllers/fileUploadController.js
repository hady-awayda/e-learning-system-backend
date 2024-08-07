import File from "../models/file.js";

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

  getFile: async (req, res) => {
    try {
      const file = await File.findById(req.params.id);
      if (!file) {
        return res.status(404).json({ message: "File not found" });
      }
      const filePath = path.resolve(file.path);
      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ message: "File not found" });
      }
      res.sendFile(filePath);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default fileUploadController;
