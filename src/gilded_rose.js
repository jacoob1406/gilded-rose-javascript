import { getUpdateStrategy } from './updaters/update';

export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      const updateStrategy = getUpdateStrategy(item);
      updateStrategy(item);
    });
  }
}
