import axios, { AxiosError, AxiosResponse } from 'axios';
import { AppConfig } from '@/config';

const instance = axios.create({
  baseURL: AppConfig.ApiEndpoint,
  timeout: 10000,
  headers: {
    'Client-Id': '',
    'Client-Secret': '',
  },
});

const onSuccess = (response: AxiosResponse) => {
  return response;
};

const onFailure = async (error: AxiosError) => {
  return error;
};

instance.interceptors.response.use(onSuccess, onFailure);

const Get = (url = '', params = {}, config = {}) => {
  const mergedConfig = {
    ...config,
    params,
  };
  return instance.get(url, mergedConfig).then(handleSuccess).catch(handleError);
};

const Post = (url = '', params = {}, config = {}) => {
  return instance.post(url, params, config).then(handleSuccess).catch(handleError);
};

const Put = (url = '', params = {}, config = {}) => {
  return instance.put(url, params, config).then(handleSuccess).catch(handleError);
};

const Delete = (url = '', config = {}) => {
  return instance.delete(url, config).then(handleSuccess).catch(handleError);
};

const handleSuccess = (response: AxiosResponse) => {
  if (response.status === 200) {
    return {
      data: response?.data,
      status: true,
    };
  } else {
    return {
      status: false,
    };
  }
};

const handleError = (error: AxiosError) => {
  return {
    status: false,
    statusCode: error?.response?.status,
    error: error?.response?.data,
  };
};

export const setAccessToken = (accessToken: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const Axios = {
  Get,
  Post,
  Put,
  Delete,
  setAccessToken,
};

export default Axios;
