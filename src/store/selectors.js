import { createSelector } from "@reduxjs/toolkit";

export const selectGetCards = (state) => state.cards.cards.items;
export const selectGetFilter = (state) => state.cards.filter;
export const selectIsLoading = (state) => state.cards.cards.isLoading;
export const selectError = (state) => state.cards.cards.error;

export const selectHasLocationFilter = createSelector(
  selectGetFilter,
  (filter) => filter.location.trim() !== ""
);

export const selectHasEquipmentFilter = createSelector(
  selectGetFilter,
  (filter) => Object.values(filter.equipment).some((value) => value > 0)
);

export const selectVisibleCards = createSelector(
  selectGetCards,
  selectGetFilter,
  (cards, filter) => {
    const { location, equipment, type } = filter;

    return cards.filter((advert) => {
      const hasLocation =
        location.trim() === "" ||
        advert.location.toLowerCase().includes(location.toLowerCase());

      const hasEquipment =
        equipment.length === 0 ||
        equipment.every((equipmentName) => {
          return (
            cards.hasOwnProperty(equipmentName) ||
            (cards.details.hasOwnProperty(equipmentName) &&
              cards.details[equipmentName] > 0)
          );
        });

      const hasType =
        type.trim() === "" || cards.form.toLowerCase() === type.toLowerCase();

      return hasLocation && hasEquipment && hasType;
    });
  }
);

export const selectFavorites = (state) => state.cards.cards.favorites;
