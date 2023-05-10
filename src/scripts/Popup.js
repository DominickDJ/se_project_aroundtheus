export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }
  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscapeClose);
    const closeButton = this._popupElement.querySelector(
      ".modal__close-button"
    );
    closeButton.addEventListener("click", this._handleClickClose);
    this._popupElement.addEventListener("mousedown", this._handleClickClose);
  }
  close() {
    document.removeEventListener("keydown", this._handleEscapeClose);
    this._popupElement.removeEventListener("mousedown", this._handleClickClose);
    this._popupElement.classList.remove("modal_opened");
  }
  _handleClickClose = (evt) => {
    const closeButton = this._popupElement.querySelector(
      ".modal__close-button"
    );
    if (
      evt.target.classList.contains("modal_opened") ||
      evt.target === closeButton
    ) {
      this.close(evt.target);
    }
  };

  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
}
