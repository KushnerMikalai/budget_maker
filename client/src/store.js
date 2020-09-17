import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/test/Counter/counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})
