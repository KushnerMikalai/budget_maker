import {createSlice} from '@reduxjs/toolkit'
import {setCookie, getCookie} from '../../../utils/helpers/cookie'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'guest',
    token: getCookie('authorization')
  },
  reducers: {
    setToken: (state, {payload}) => {
      console.log(payload, 'asdas');
      setCookie('session_id', payload)
      state.token = payload
    }
  }
})

export const {setToken} = userSlice.actions
export const selectUser = state => state.user
export default userSlice.reducer
