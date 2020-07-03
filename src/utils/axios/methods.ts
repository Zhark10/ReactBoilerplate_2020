import axios from 'axios';

export class RequestsMethods {
  private validToken = () => {
      return localStorage.getItem('token')
  }

  config = { headers: { 'Authorization': 'Bearer ' + this.validToken() }}

  post = async (url: string, data: any) => {
    return await axios.post(process.env.API_URL + url, data, this.config)
  }
  
  get = async (url: string) => {
    return await axios.get(process.env.API_URL + url, this.config)
  }
  
  put = async (url: string, data: any) => {
    return await axios.put(process.env.API_URL + url, data, this.config)
  }
}

export const Axios = new RequestsMethods();