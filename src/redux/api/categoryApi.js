import { axiosClient } from '@/utils';

const categoryApi = {
  fetchCategories(params) {
    return axiosClient.get('/categories', { params });
  },
  fetchBrands() {
    return axiosClient.get('/brands');
  },
  fetchCategoryDetail(id, params) {
    return axiosClient.get(`/categories/${id}`, { params });
  },
};

export default categoryApi;
