import apiClient from 'src/client/apiClient';

export const getFlights = async () => {
  const res = await apiClient.get('/378e02e8e732bb1ac55b');

  if (res && res.data) {
    return res.data;
  }
};
