import {client} from '../client'

export default {
  get: async () => {
    return await client.get(`${process.env.REACT_APP_API_HOST}/profile`, {}, {})
  },
}
