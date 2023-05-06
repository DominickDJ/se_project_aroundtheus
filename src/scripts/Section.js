export default class Section {
  constructor({ items, renderer }, galleryCards) {
    this._renderer = renderer;
    this._items = items;
    this._galleryCards = document.querySelector(galleryCards);
  }
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem() {
    const itemElement = this._renderer();
    this._galleryCards.prepend(itemElement);
  }
}
