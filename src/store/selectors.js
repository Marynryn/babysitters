import { createSelector } from '@reduxjs/toolkit';

export const selectGetAdverts = state => state.adverts.adverts.items;
export const selectGetFilter = state => state.adverts.filter;
export const selectIsLoading = state => state.adverts.adverts.isLoading;
export const selectError = state => state.adverts.adverts.error;

export const selectHasLocationFilter = createSelector(
  selectGetFilter,
  filter => filter.location.trim() !== ''
);

export const selectHasEquipmentFilter = createSelector(
  selectGetFilter,
  filter => Object.values(filter.equipment).some(value => value > 0)
);

export const selectVisibleAdverts = createSelector(
  selectGetAdverts,
  selectGetFilter,
  (adverts, filter) => {
    const { location, equipment, type } = filter;

    return adverts.filter(advert => {
      const hasLocation =
        location.trim() === '' ||
        advert.location.toLowerCase().includes(location.toLowerCase());

      const hasEquipment =
        equipment.length === 0 ||
        equipment.every(equipmentName => {
          return (
            advert.hasOwnProperty(equipmentName) ||
            (advert.details.hasOwnProperty(equipmentName) &&
              advert.details[equipmentName] > 0)
          );
        });

      const hasType =
        type.trim() === '' || advert.form.toLowerCase() === type.toLowerCase();

      return hasLocation && hasEquipment && hasType;
    });
  }
);

export const selectFavorites = state => state.adverts.adverts.favorites;
