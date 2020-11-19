import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        kilunchik: 'ok'
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        setKilunchick: (state, action) => {
            state.kilunchik = action.payload
        }
    }
})

export const setKilunchickAction = data => dispatch => {
    dispatch(setKilunchick(data))
}

export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}

export const { increment, decrement, incrementByAmount, setKilunchick } = counterSlice.actions
export const selectCounter = state => state.counter.kilunchik
export const selectCount = state => state.counter.value

export default counterSlice.reducer
