import { axiosClient } from '@/utils';

const giftApi = {
  fetchFeaturedGifts(type = 'voucher', page = 1, limit = 10) {
    return axiosClient.get('/gifts/list-featured', {
      params: {
        page,
        type,
        limit,
      },
    });
  },
  fetchGifts(params) {
    return axiosClient.get('/gifts/list', {
      params,
    });
  },
  fetchAllGiftInSet(giftSet = 1249) {
    return axiosClient.get(`/gift_set/${giftSet}`);
  },
  fetchGiftDetailParent(giftId) {
    const params = {
      lang: 'vi',
      gift_id: 1249,
      campaign_id: 20,
      app_id: 500000112,
    };
    return axiosClient.get(`/gifts/${giftId}`, { params });
  },
  fetchGiftDetailChild(giftDetailId) {
    const params = {
      lang: 'vi',
      gift_id: 1249,
      campaign_id: 20,
    };
    return axiosClient.get(`/gifts/detail/${giftDetailId}`, { params });
  },
  fetchGiftsByIds(params) {
    return axiosClient.get('/gifts/watched', { params });
  },
  fetchGiftImages(giftDetailId) {
    return axiosClient.get('/gifts/image', {
      params: {
        id: giftDetailId,
      },
    });
  },
};

export default giftApi;
