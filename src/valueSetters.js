import { MIN_QUALITY, MAX_QUALITY } from './constants';

export const increaseQuality = item => {
  if (item.quality < MAX_QUALITY) {
    item.quality++;
  }
};

export const decreaseQuality = item => {
  if (item.quality > MIN_QUALITY) {
    item.quality--;
  }
};

export const decreaseSellIn = item => {
  item.sellIn--;
};

export const isExpired = item => {
  return item.sellIn < MIN_QUALITY;
};
