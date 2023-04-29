export default class Popup {
  constructor({ popupSelector }) {
    this.popupElement = document.querySelector(`.${popupSelector}`);
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
  }
  open() {
    this._popupElement.classlist.add("modal_opened");
    document.addEventListener("keydown", this._handleEscapeClose);
    this._popupElement.addEventListener("mousedown", this._handleClickClose);
  }
  close() {
    this._popupElement.classlist.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscapeClose);
    this._popupElement.removeEventListener("mousedown", this._handleClickClose);
  }

  _handleClickClose(evt) {
    if (evt.target === evt.currentTarget) {
      closeModal(evt.target);
    }
  }
  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      const openedModal = document.querySelector(".modal_opened");
      closeModal(openedModal);
    }
  }
  setEventListeners() {
    document.addEventListener("keydown", () => this._handleEscapeClose());
    this._handleClickClose();
  }
}
