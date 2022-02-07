import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_ENDPOINT } from 'settings';

export async function get<T = any>(url: string, params?: any, headers?: any): Promise<AxiosResponse<T> | undefined> {
  return await request({ url, method: 'GET', params, headers });
}

export async function post<T = any>(url: string, data: any, headers?: any): Promise<AxiosResponse<T> | undefined> {
  return await request({ url, method: 'POST', data, headers });
}

export async function put<T = any>(url: string, data: any, headers?: any): Promise<AxiosResponse<T> | undefined> {
  return await request({ url, method: 'PUT', data, headers });
}

export async function del<T = any>(
  url: string,
  data: any,
  params?: any,
  headers?: any
): Promise<AxiosResponse<T> | undefined> {
  return await request({ url, method: 'DELETE', data, params, headers });
}

export async function request(options: AxiosRequestConfig): Promise<AxiosResponse<any, any> | undefined> {
  try {
    return await axios({
      ...options,
      ...options.params,
      baseURL: API_ENDPOINT,
      headers: {
        ...options.headers
      }
    });
  } catch (err) {
    console.log(err);
  }
}
