import axios from "axios";

// Flow chart cheat sheet: 
// src/components/login => Here => routes\api\ => controllers\ => models\

export default {
  // Gets User by id
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  // Gets the userscore with the given id
  getUserScore: function (id) {
    return axios.get("/api/userscore/" + id);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  },
  // Saves userscore to the database
  saveUserScore: function (data) {
    return axios.post("/api/userScore", data)
  },
  updateUserScore: function (id) {
    return axios.put("/api/userScore/" + id)
  }
};
