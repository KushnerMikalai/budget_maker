import { createSlice } from '@reduxjs/toolkit';
import apiServices from '../../api/services';
import { setTokenClient } from '../../api/client';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        profile: null,
        errorsAuth: [],
        loadingProfile: true,
        login: false,
    },
    reducers: {
        setProfile: (state, { payload }) => {
            state.profile = payload
            state.loadingProfile = false
            state.login = true
        },
        setErrorsAuth: (state, { payload }) => {
            state.errorsAuth = payload
        },
        setLoadingProfile: (state, { payload }) => {
            state.loadingProfile = payload
        },
        setLoginStatus: (state, { payload }) => {
            state.login = payload
        }
    },
});

export const getUserProfile = () => async (dispatch) => {
    const res = await apiServices.profile.get();
    console.log(res, 'getUserProfile');
    if (res.errors) {
        dispatch(setProfile(null));
    } else {
        dispatch(setProfile(res));
    }
    return res;
};

export const userSignUp = (data) => async (dispatch) => {
    const res = await apiServices.auth.register(data);
    console.log(res, 'userSignUp');
    if (res.errors && Array.isArray(res.errors)) {
        console.log(res.errors);
        dispatch(setErrorsAuth(res.errors));
    } else {
        setTokenClient(res.token);
        dispatch(setProfile(res.user));
        return true;
    }
    setTokenClient(res.token);
    dispatch(setProfile(res.user));
};

export const userSignIn = (data) => async (dispatch) => {
    const res = await apiServices.auth.login(data);
    console.log(res, 'userSignIn');
    if (res.errors) {
        if (Array.isArray(res.errors)) {
            dispatch(setErrorsAuth(res.errors));
        }
        return false;
    } else {
        setTokenClient(res.token);
        dispatch(setProfile(res.user));
        return true;
    }
};

export const {
    setToken,
    setProfile,
    setErrorsAuth,
    setLoadingProfile,
    setLoginStatus,
} = userSlice.actions;

export const selectLogin = state => state.user.login
export const selectUser = (state) => state.user
export const selectProfile = state => state.profile
export const selectAuthError = (state) => state.user.errorsAuth
export const selectLoadingProfile = (state) => state.user.loadingProfile
export default userSlice.reducer
