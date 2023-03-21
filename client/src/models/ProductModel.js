import api from '../api.js';

export async function getOne(id) {
  const result = await api.get(`/products/${id}`);

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}
export async function addToCart(productId, userId, amount) {
  const result = await api.post(`/products/${productId}/addToCart`, {
    userId,
    amount
  });

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}
