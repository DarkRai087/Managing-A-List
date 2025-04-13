let users = [
  {
    id: "1",
    firstName: "Anshika",
    lastName: "Agarwal",
    hobby: "Teaching"
  },
  {
    id: "2",
    firstName: "Parth",
    lastName: "Pandey",
    hobby: "Programming"
  },
  {
    id: "3",
    firstName: "Sebbel",
    lastName: "Pro",
    hobby: "Reading"
  },
  {
    id: "4",
    firstName: "Prakhar",
    lastName: "Pandey",
    hobby: "Cycling"
  },
  {
    id: "5",
    firstName: "Rahul",
    lastName: "Kumar",
    hobby: "Painting"
  }
];


export const getAllUsers = () => {
  return users;
};

export const getUserById = (id) => {
  return users.find(user => user.id === id);
};


export const createUser = (userData) => {
  const newUser = {
    id: String(users.length + 1),
    ...userData
  };
  
  users.push(newUser);
  return newUser;
};


export const updateUser = (id, userData) => {
  const index = users.findIndex(user => user.id === id);
  
  if (index === -1) {
    return null;
  }
  
  const updatedUser = {
    ...users[index],
    ...userData
  };
  
  users[index] = updatedUser;
  return updatedUser;
};


export const deleteUser = (id) => {
  const index = users.findIndex(user => user.id === id);
  
  if (index === -1) {
    return false;
  }
  
  users = users.filter(user => user.id !== id);
  return true;
};