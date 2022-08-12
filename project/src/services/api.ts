import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';
import { getToken } from './token';
import { store } from '../store';
import { setAvatarUrl } from '../store/action';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BACKEND_URL = 'https://10.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  //"перехватчик" для отправки заголовка с токеном
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  //"перехватчик" ошибки
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.error(error.response.data.error);
      }

      throw error;
    }
  );

  //"перехватчик" получения URL к аватару пользователя
  api.interceptors.response.use(
    (response: AxiosResponse) => {
      const avatarUrl = response.data.avatarUrl;
      if (avatarUrl) {
        store.dispatch(setAvatarUrl(avatarUrl));
      }

      return response;
    },
  );

  return api;
};
