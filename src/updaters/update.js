import { updateAgedBrie } from './agedBrie';
import { updateLegendary } from './legendary';
import { updateBackstagePass } from './backstagePass';
import { updateNormal } from './normal';

export const isAgedBrie = item => {
  return item.name === 'Aged Brie';
};
export const isBackstagePass = item => {
  return item.name === 'Backstage passes to a TAFKAL80ETC concert';
};
export const isLegendary = item => {
  return item.name === 'Sulfuras, Hand of Ragnaros';
};

export const getUpdateStrategy = item => {
  if (isLegendary(item)) {
    return updateLegendary;
  }

  if (isAgedBrie(item)) {
    return updateAgedBrie;
  }

  if (isBackstagePass(item)) {
    return updateBackstagePass;
  }

  return updateNormal;
};
