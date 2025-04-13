
import * as userModel from '../models/userModel.js';

export const getUsers = (req, res) => {
  const users = userModel.getAllUsers();
  res.status(200).json({
    success: true,
    data: users
  });
};


export const getUserById = (req, res) => {
  const userId = req.params.id;
  const user = userModel.getUserById(userId);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: `User with ID ${userId} not found`
    });
  }
  
  res.status(200).json({
    success: true,
    data: user
  });
};


export const createUser = (req, res) => {
  const userData = req.body;
  const newUser = userModel.createUser(userData);
  
  res.status(201).json({
    success: true,
    data: newUser,
    message: 'User created successfully'
  });
};


export const updateUser = (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  
  const updatedUser = userModel.updateUser(userId, userData);
  
  if (!updatedUser) {
    return res.status(404).json({
      success: false,
      message: `User with ID ${userId} not found`
    });
  }
  
  res.status(200).json({
    success: true,
    data: updatedUser,
    message: 'User updated successfully'
  });
};


export const deleteUser = (req, res) => {
  const userId = req.params.id;
  const deleted = userModel.deleteUser(userId);
  
  if (!deleted) {
    return res.status(404).json({
      success: false,
      message: `User with ID ${userId} not found`
    });
  }
  
  res.status(200).json({
    success: true,
    message: `User with ID ${userId} deleted successfully`
  });
};