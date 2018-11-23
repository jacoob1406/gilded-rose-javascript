import { decreaseSellIn, increaseQuality, isExpired } from '../valueSetters';
import { MIN_QUALITY } from '../constants';

export const updateBackstagePass = item => {
  decreaseSellIn(item);

  if (isExpired(item)) {
    item.quality = MIN_QUALITY;
    return;
  }
  increaseQuality(item);

  if (item.sellIn < 10) {
    increaseQuality(item);
  }
  if (item.sellIn < 5) {
    increaseQuality(item);
  }
};
