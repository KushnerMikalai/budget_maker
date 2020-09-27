import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../components/test/Counter/counterSlice'
import postsReducer from '../components/test/posts/postsSlice'
import userReducer from '../components/test/users/userSlice'
import usersReducer from '../components/test/users/usersSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        user: userReducer,
        users: usersReducer
    }
})
