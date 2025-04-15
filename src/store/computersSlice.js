import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  computerColors: [],
  computerBrands: [],
  computers: [],
  selectedComputerColors: [],
  selectedComputerBrands: [],
};

const computersSlice = createSlice({
  name: 'computers',
  initialState,
  reducers: {
    setComputerColors: (state, action) => {
      state.computerColors = action.payload;
    },
    setComputerBrands: (state, action) => {
      state.computerBrands = action.payload;
    },
    setComputers: (state, action) => {
      state.computers = action.payload;
    },
    toggleComputerColor: (state, action) => {
      if (state.selectedComputerColors.includes(action.payload)) {
        state.selectedComputerColors = state.selectedComputerColors.filter(color => color !== action.payload);
      } else {
        state.selectedComputerColors.push(action.payload);
      }
    },
    toggleComputerBrand: (state, action) => {
      if (state.selectedComputerBrands.includes(action.payload)) {
        state.selectedComputerBrands = state.selectedComputerBrands.filter(brand => brand !== action.payload);
      } else {
        state.selectedComputerBrands.push(action.payload);
      }
    },
    resetComputerColors: (state) => {
      state.selectedComputerColors = [];
    },
    resetComputerBrands: (state) => {
      state.selectedComputerBrands = [];
    },
  },
});

export const { 
  setComputerColors, 
  setComputerBrands, 
  setComputers, 
  toggleComputerColor, 
  toggleComputerBrand, 
  resetComputerColors, 
  resetComputerBrands 
} = computersSlice.actions;
export default computersSlice.reducer; 