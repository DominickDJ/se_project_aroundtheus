import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._confirmDeleteButton =
      this._popupElement.querySelector("#confirm-button");
    this._setHandlers();
  }

  _setHandlers() {
    this._confirmDelete = this._popupElement.querySelector("#confirm-button");
    this._confirmDelete.addEventListener(
      "click",
      this._handleConfirm.bind(this)
    );
    this._confirmDeleteButton.addEventListener(
      "click",
      this._handleConfirm.bind(this)
    );
  }

  _handleConfirm(event) {
    event.preventDefault();
    if (typeof this._confirmHandler === "function") {
      this._confirmHandler();
    }
  }

  open(evt) {
    super.open();
    this._handleFormSubmit(evt);
  }

  setConfirmHandler(handler) {
    this._confirmHandler = handler;
  }

  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }
}
