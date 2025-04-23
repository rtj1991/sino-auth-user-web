import axios from 'axios';

const apiUrl = process.env.REACT_APP_BASE_URL;

export const register = async ({ username, email, password }) => {
  const response = await fetch('http://localhost:8080/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, email, password })
  });

  return response;
};


export const login = async (username, password) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, { username, password });

    return response.data.data.token; 
  } catch (error) {
    throw new Error('Login failed');
  }
};

export const getHistory = async (token) => {

  try {
    const response = await axios.get(`${apiUrl}/history/latest`, {
      headers: { Authorization: `Bearer ${token}` } 
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch history');
  }
};  
