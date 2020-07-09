import axios from 'axios'
import { TResponseModel, TStoreTemplate } from 'redux/config/root-types'
import { DataConverter } from './dataConverter'

const { convertToStoreModel } = DataConverter()

const validToken = () => {
  return localStorage.getItem('token')
}

export const RequestMethods = () => {
  const API_URL = process.env.REACT_APP_API_URL
  const config = !!validToken() ? { headers: { Authorization: 'Bearer ' + validToken() } } : {}

  async function post<T>(url: string, data: any): Promise<TStoreTemplate<T>> {
    const response = await axios.post(API_URL + url, data, config)
    return convertToStoreModel(response.data as TResponseModel<T>)
  }

  async function get<T>(url: string): Promise<TStoreTemplate<T>> {
    const response = await axios.get(API_URL + url, config)
    return convertToStoreModel(response.data as TResponseModel<T>)
  }

  async function put<T>(url: string, data: any): Promise<TStoreTemplate<T>> {
    const response = await axios.put(API_URL + url, data, config)
    return convertToStoreModel(response.data as TResponseModel<T>)
  }

  return {
    post,
    get,
    put,
  }
}
