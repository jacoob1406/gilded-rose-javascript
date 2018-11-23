import { updateAgedBrie } from './agedBrie';
import { updateLegendary } from './legendary';
import { updateBackstagePass } from './backstagePass';
import { updateNormal } from './normal';
import { updateConjured } from './conjured';

export const isAgedBrie = item => {
  return item.name === 'Aged Brie';
};
export const isBackstagePass = item => {
  return item.name === 'Backstage passes to a TAFKAL80ETC concert';
};
export const isLegendary = item => {
  return item.name === 'Sulfuras, Hand of Ragnaros';
};
export const isConjured = item => {
  return item.name === 'Conjured item';
};

export const getUpdateStrategy = item => {
  if (isLegendary(item)) {
    return updateLegendary;
  }

  if (isAgedBrie(item)) {
    return updateAgedBrie;
  }

  if (isConjured(item)) {
    return updateConjured;
  }

  if (isBackstagePass(item)) {
    return updateBackstagePass;
  }

  return updateNormal;
};
