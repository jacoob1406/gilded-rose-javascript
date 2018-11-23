import { decreaseSellIn, increaseQuality, isExpired } from '../valueSetters';

export const updateAgedBrie = item => {
  decreaseSellIn(item);
  increaseQuality(item);

  if (isExpired(item)) {
    increaseQuality(item);
  }
};
