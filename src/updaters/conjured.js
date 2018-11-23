import { decreaseSellIn, decreaseQuality, isExpired } from '../valueSetters';

export const updateConjured = item => {
  decreaseSellIn(item);
  decreaseQuality(item);
  decreaseQuality(item);

  if (isExpired(item)) {
    decreaseQuality(item);
    decreaseQuality(item);
  }
};
