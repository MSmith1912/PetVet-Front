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

export const getUserById = user_id => axios({
  method: "GET",
  url: `${backendBaseUrl}/userController/GetUserById/${user_id}`,
  headers: headers
});

export const deleteUser = user_id => axios({
  method: "PATCH",
  url: `${backendBaseUrl}/userController/DeleteUserById/${user_id}`,
  headers: headers
})