import { axiosClient } from '@/utils';

const brandApi = {
  fetchBrands() {
    return axiosClient.get('/brands');
  },
  fetchBrandDetail(brandId, showOffice = 0) {
    return axiosClient.get(`/brands/${brandId}`, {
      params: {
        show_office: showOffice,
      },
    });
  },
};

export default brandApi;
