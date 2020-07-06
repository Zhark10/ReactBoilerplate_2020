import axios from 'axios'

export class RequestsMethods {
  private validToken = () => {
    return localStorage.getItem('token')
  }
  private API_URL = process.env.REACT_APP_API_URL

  config = { headers: { Authorization: 'Bearer ' + this.validToken() } }

  post = async (url: string, data: any): Promise<any> => {
    return await axios.post(this.API_URL + url, data, this.config)
  }

  get = async (url: string): Promise<any> => {
    return await axios.get(this.API_URL + url, this.config)
  }

  put = async (url: string, data: any): Promise<any> => {
    return await axios.put(this.API_URL + url, data, this.config)
  }
}

export const Axios = new RequestsMethods()
