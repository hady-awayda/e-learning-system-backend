import Course from "../models/course.js";

export const GetCourses = async () => {
  return await Course.find();
};
