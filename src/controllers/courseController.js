import Course from "../models/Course.js";

const CourseController = {
  getCourses: async (req, res) => {
    try {
      const courses = await Course.find();
      res.status(200).json(courses);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getCourse: async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.status(200).json(course);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createCourse: async (req, res) => {
    try {
      const course = new Course(req.body);
      await course.save();
      res.status(201).json(course);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  updateCourse: async (req, res) => {
    try {
      const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.status(200).json(course);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  deleteCourse: async (req, res) => {
    try {
      const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.status(200).json({ message: "Course marked as deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default CourseController;
