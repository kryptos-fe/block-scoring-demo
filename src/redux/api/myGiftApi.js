import { axiosClient } from '@/utils';

const myGiftApi = {
  fetchMyGifts(params) {
    return axiosClient.get('/my-gift/list', { params });
  },
  fetchMyGiftDetail(id, params) {
    return axiosClient.get(`/my-gift/${id}`, { params });
  },
  fetchTransactions(params) {
    params.page = params.page || 1;
    params.limit = params.limit || 50;

    return axiosClient.get('/my-gift/transaction', { params });
  },
  fetchMultipleGiftDetail(brandId, price, params) {
    return axiosClient.get(`/my-gift/multi/${brandId}/${price}`, { params });
  },
};

export default myGiftApi;
