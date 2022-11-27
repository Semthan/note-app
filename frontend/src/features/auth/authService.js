import axios from 'axios'

const API_URL = '/user'

//Register user

const register = async (userData) => {
  const respose = await axios.post(API_URL, userData)

  if (respose.data) {
    localStorage.setItem('user', JSON.stringify(respose.data))
  }

  return respose.data
}

//Logout
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
}

export default authService