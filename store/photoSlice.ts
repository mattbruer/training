import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface photoState {
  photos: {}[];
}

const initialState: photoState = {
  photos: [],
};

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    loadPhotos: (state, action) => {
      state.photos = action.payload;
    },
    photoUploaded: (state, action) => {
      state.photos.push(action.payload);
    },
  },
});

export const { loadPhotos, photoUploaded } = photoSlice.actions;
export default photoSlice.reducer;
