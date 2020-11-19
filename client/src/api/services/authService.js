import {client} from '../client'

export default {
  register: async (body) => {
    return await client.post(`${process.env.REACT_APP_API_HOST}/register`, body, {})
  },
  login: async (body) => {
    return await client.post(`${process.env.REACT_APP_API_HOST}/login`, body, {})
  },
  token: async () => {
    return await client.get(`${process.env.REACT_APP_API_HOST}/token`, null, {})
  },
}
