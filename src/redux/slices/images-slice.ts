import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { BreedImage } from "../../api/types.ts";
import { IApiSlice } from "../types.ts";
import { getImageByBreed } from "../../api/api-client.ts";

export interface IImagesState extends IApiSlice<BreedImage> {
}

export const initialState: IImagesState = {
  data: undefined, fetching: false, error: undefined,
};

export const extraActions = {
  getImageByBreed: createAsyncThunk('get-image-by-breed', (breed: string) => getImageByBreed(breed)),
};

const slice = createSlice({
  name: 'list/images', initialState, reducers: {}, extraReducers: (builder) => {
    builder
      .addCase(extraActions.getImageByBreed.pending, (state) => {
        state.data = undefined;
        state.fetching = true;
        state.error = undefined;
      })
      .addCase(extraActions.getImageByBreed.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetching = false;
      })
      .addCase(extraActions.getImageByBreed.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.error;
      });
  },
});

export const imagesActions = {
  ...slice.actions, ...extraActions,
};

export default slice;