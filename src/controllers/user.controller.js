import User from "../models/user.model.js";

const UserController = {
  getUsers: async (req, res) => {
    const users = await User.find();
    res.json(users);
  },

  getUser: async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
  },
};

export default UserController;
