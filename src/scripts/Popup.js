export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
  }
  _handleClickClose = (evt) => {
    if (evt.target.classList.contains("modal_opened")) {
      this.close(evt.target);
    }
  };

  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscapeClose);
    this._popupElement.addEventListener("mousedown", this._handleClickClose);
  }
  close() {
    document.removeEventListener("keydown", this._handleEscapeClose);
    this._popupElement.removeEventListener("mousedown", this._handleClickClose);
    this._popupElement.classList.remove("modal_opened");
  }

  setEventListeners() {
    document.addEventListener("keydown", () => this._handleEscapeClose());
    this._handleClickClose();
  }
}
