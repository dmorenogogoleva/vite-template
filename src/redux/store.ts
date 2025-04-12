import { combineReducers, configureStore } from '@reduxjs/toolkit'
import breedsSlice from "./slices/breeds-slice.ts";
import imagesSlice from "./slices/images-slice.ts";

export const store = configureStore({
  reducer: combineReducers({
    breeds: breedsSlice.reducer,
    images: imagesSlice.reducer
  }), middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export type IAppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;

export const { dispatch } = store