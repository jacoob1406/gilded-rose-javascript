import { decreaseSellIn, decreaseQuality, isExpired } from '../valueSetters';

export const updateNormal = item => {
  decreaseSellIn(item);
  decreaseQuality(item);

  if (isExpired(item)) {
    decreaseQuality(item);
  }
};
