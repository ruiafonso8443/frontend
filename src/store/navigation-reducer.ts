/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import Page from "../types/pages";

import { StoreState } from ".";

type navigationState = {
  page: Page;
};

// ************ INITIAL STATE ************
const initialState: navigationState = {
  page: 1,
};

// ************ SLICE ************
const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    goToLoginPage: (state) => {
      state.page = Page.Login;
    },
  },
});

// ************ ACTIONS ************
export const { goToLoginPage } = navigationSlice.actions;

// ************ SELECTORS ************
export const selectedPage = (state: StoreState): Page => state.navigation.page;

export default navigationSlice.reducer;
