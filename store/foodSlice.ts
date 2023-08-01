import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface foodState {
  allRecipes: {}[];
  pantry: {}[];
}

const initialState: foodState = {
  allRecipes: [],
  pantry: [],
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    loadRecipes: (state, action: PayloadAction<[]>) => {
      state.allRecipes = action.payload;
    },
    newRecipe: (state, action: PayloadAction<{}>) => {
      state.allRecipes.push(action.payload);
    },
    loadPantry: () => {},
    addToPantry: () => {},
    removeFromPantry: () => {},
    editPantryItem: () => {},
  },
});

export const { newRecipe, loadRecipes } = foodSlice.actions;
export default foodSlice.reducer;
