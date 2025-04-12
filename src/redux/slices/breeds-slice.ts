import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Breed } from "../../api/types.ts";
import { IApiSlice } from "../types.ts";
import { getAllBreeds } from "../../api/api-client.ts";

export interface IBreedsState extends IApiSlice<Breed> {}

export const initialState: IBreedsState = {
  data: undefined, fetching: false, error: undefined,
};

export const extraActions = {
  getAll: createAsyncThunk('get-all-breeds', () => getAllBreeds()),
};

const slice = createSlice({
  name: 'list/breeds', initialState, reducers: {}, extraReducers: (builder) => {
    builder
      .addCase(extraActions.getAll.pending, (state) => {
        state.data = undefined;
        state.fetching = true;
        state.error = undefined;
      })
      .addCase(extraActions.getAll.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetching = false;
      })
      .addCase(extraActions.getAll.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.error;
      });
  },
});

export const breedsActions = {
  ...slice.actions, ...extraActions,
};

export default slice;