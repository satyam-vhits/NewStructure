import {PayloadAction, createAction, createSlice} from '@reduxjs/toolkit';
import {ReducerState} from './interface';

import {fetchUserProfile} from './userAPICall';
const initialState: ReducerState = {
  userData: {},
  isLogin: false,
  token: undefined,
  DarkTheme: false,
};
export const clearAction = createAction('clear');
const UserData = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      return {
        ...state,
        token: action.payload?.token,
        userData: action.payload,
        isLogin: true,
      };
    },

    themeChange: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        DarkTheme: action.payload,
      };
    },

    getUserDetails: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
      };
    },

    logoutSuccess: state => {
      return initialState;
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      return {
        ...state,
        userData: action.payload,
      };
    });

    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      return {
        ...state,
      };
    });

    builder.addCase(clearAction, () => initialState);
  },
});

export const {loginSuccess, logoutSuccess, themeChange, getUserDetails} =
  UserData.actions;

export default UserData.reducer;
