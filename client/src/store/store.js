import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../components/test/Counter/counterSlice'
import postsReducer from '../components/test/posts/postsSlice'
import userReducer from './slices/userSlice'
import usersReducer from './slices/usersSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        user: userReducer,
        users: usersReducer
    }
})
