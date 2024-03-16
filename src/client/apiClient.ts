import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.npoint.io',
  timeout: 3000,
});

export default apiClient;
