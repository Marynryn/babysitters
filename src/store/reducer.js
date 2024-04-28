import { createSlice } from "@reduxjs/toolkit";

const mySlice = createSlice({
  name: "cards",
  initialState: {
    cards: {
      items: [],
      isLoading: false,
      error: null,
      favorites: [],
    },
    filter: {
      location: "",
      equipment: [],
      type: "",
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
      state.cards.favorites.push(payload);
    },
    removeFromFavorites: (state, { payload }) => {
      state.cards.favorites = state.cards.favorites.filter(
        (favorites) => favorites.name !== payload
      );
    },
    fetchCards: (state, action) => {
      state.cards.isLoading = false;
      state.error = null;
      state.cards.items = action.payload;
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchAdverts.pending, (state, action) => {
  //       state.adverts.isLoading = true;
  //     })
  //     .addCase(fetchAdverts.fulfilled, (state, action) => {
  //       state.adverts.isLoading = false;
  //       state.error = null;
  //       state.adverts.items = action.payload;
  //     })
  //     .addCase(fetchAdverts.rejected, (state, action) => {
  //       state.adverts.isLoading = false;
  //       state.adverts.error = action.payload;
  //     });
  // },
});

export const cardsReducer = mySlice.reducer;
export const { setFilter, addToFavorites, removeFromFavorites, fetchCards } =
  mySlice.actions;
