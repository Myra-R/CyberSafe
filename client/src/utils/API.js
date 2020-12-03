import axios from "axios";

export default {
  // Gets User by id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Gets the userscore with the given id
  getUserScore: function(id) {
    return axios.get("/api/userscore/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  // Saves userscore to the database
  saveUserscore: function(data) {
      return axios.post("/api/userscore", data)
  }
};
