import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const mySlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: {
      items: [],
      isLoading: false,
      error: null,
      favorites: [],
    },
    filter: {
      location: '',
      equipment: [],
      type: '',
    },
   
  },
  reducers: {
    setFilter: (state, action) => {
      const { location, equipment, type } = action.payload;
      if (location !== undefined) {
        state.filter.location = location;
      }
      if (equipment !== undefined) {
        state.filter.equipment = equipment;
      }
      if (type !== undefined) {
        state.filter.type = type;
      }
    },
    addToFavorites: (state, { payload }) => {
      state.adverts.favorites.push(payload);
    },
    removeFromFavorites: (state, { payload }) => {
      state.adverts.favorites = state.adverts.favorites.filter(
        favorites => favorites._id !== payload
      );
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, (state, action) => {
        state.adverts.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.adverts.isLoading = false;
        state.error = null;
        state.adverts.items = action.payload;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.adverts.isLoading = false;
        state.adverts.error = action.payload;
      });
  },
});

export const advertsReducer = mySlice.reducer;
export const { setFilter, addToFavorites, removeFromFavorites } =
  mySlice.actions;
