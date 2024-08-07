import User from "../models/user.js";
import Course from "../models/course.js";

const EnrollmentController = {
  /**
   * Enroll a user in a course
   * @async
   * @param {Object} req - Express request object
   * @param {Object} req.body - Request body
   * @param {string} req.body.userId - User ID
   * @param {string} req.body.courseId - Course ID
   * @param {Object} res - Express response object
   * @returns {Promise<void>}
   */
  enrollInCourse: async (req, res) => {
    try {
      const { userId, courseId } = req.body;

      const user = await User.findById(userId);
      const course = await Course.findById(courseId);

      if (!user || !course) {
        return res.status(404).json({ message: "User or Course not found" });
      }

      if (!user.enrolled_courses.includes(courseId)) {
        user.enrolled_courses.push(courseId);
      }

      if (!course.students.includes(userId)) {
        course.students.push(userId);
      }

      await user.save();
      await course.save();

      res
        .status(200)
        .json({ message: "User enrolled in course", user, course });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  /**
   * Unenroll a user from a course
   * @async
   * @param {Object} req - Express request object
   * @param {Object} req.body - Request body
   * @param {string} req.body.userId - User ID
   * @param {string} req.body.courseId - Course ID
   * @param {Object} res - Express response object
   * @returns {Promise<void>}
   */
  unenrollFromCourse: async (req, res) => {
    try {
      const { userId, courseId } = req.body;

      const user = await User.findById(userId);
      const course = await Course.findById(courseId);

      if (!user || !course) {
        return res.status(404).json({ message: "User or Course not found" });
      }

      user.enrolled_courses = user.enrolled_courses.filter(
        (id) => id.toString() !== courseId
      );
      course.students = course.students.filter(
        (id) => id.toString() !== userId
      );

      await user.save();
      await course.save();

      res
        .status(200)
        .json({ message: "User unenrolled from course", user, course });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default EnrollmentController;
