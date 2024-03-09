import User from "../models/user.model";

// Route to get all users
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Route to get an user by ID
const getUserByID = async (req, res) => {
  try {
    const userByID = await User.findById(req.params.id);
    res.json(userByID);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Route to create an user in the collection
const createUser = async (req, res) => {
  const newUser = new User({
    busPlate: req.body.busPlate,
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    lat: req.body.lat,
    lng: req.body.lng,
  });
  try {
    const createdUser = await newUser.save();
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Route to update an User
const updateUser = async (req, res) => {
  try {
    const userByID = await User.findById(req.params.id);
    if (!userByID) {
      return res.status(404).json({ message: "User not found" });
    }
    userByID.lat = req.body.lat;
    userByID.lng = req.body.lng;

    const updatedUser = await userByID.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Route pour supprimer un élément
const deleteUserByID = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUserByID,
};
