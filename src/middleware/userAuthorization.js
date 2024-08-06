import authentication from "./authentication";

const userAuthorization = (req, res, next) => {
  authentication(req, res, () => {
    if (req.user && req.user.role === "student") {
      next();
    } else {
      res.status(403).json({ message: "User authorization required" });
    }
  });
};

export default userAuthorization;
