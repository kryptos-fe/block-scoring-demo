import { axiosClient } from '@/utils';

export const cartApi = {
  createCart(data) {
    return axiosClient.post('/cart', data);
  },
};
