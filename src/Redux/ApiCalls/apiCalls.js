import axios from 'axios';

const backendBaseUrl = "http://localhost:8088/petvet";
const headers = { "Content-Type": "application/json;charset=UTF-8" };

export const createUser = body => axios({
  method: "POST",
  url: `${backendBaseUrl}/userController/CreateUser`,
  headers: headers,
  data: body
});

export const getAllUsers = () => axios({
  method: "GET",
  url: `${backendBaseUrl}/userController/GetAllUsers`,
  headers: headers
});

export const getUserById = userId => axios({
  method: "GET",
  url: `${backendBaseUrl}/userController/GetUserById/${userId}`,
  headers: headers
});