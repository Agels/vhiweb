import axios from 'axios';

export const getUser = async (page) => {
  console.log(page)
    const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
    return res;
}

export const getUserById = (id) => {

  return axios.get(`https://reqres.in/api/users/${id}`)
}