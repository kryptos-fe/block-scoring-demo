import { axiosClient } from '@/utils';

const locationApi = {
  fetchProvinces() {
    return axiosClient.get('/location/province');
  },
  fetchDistricts(province_id) {
    return axiosClient.get('/location/district', { params: { province_id } });
  },
  fetchWards(district_id) {
    return axiosClient.get('/location/ward', { params: { district_id } });
  },
};

export default locationApi;
