import api from '../api.js';

export async function getCart(id) {
  const result = await api.get(`/users/${id}/getCart`);

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}
