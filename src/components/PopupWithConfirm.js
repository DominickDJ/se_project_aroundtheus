import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._confirmDeleteButton =
      this._popupElement.querySelector("#confirm-button");
    this._confirmForm = this._popupElement.querySelector("#confirm-form");
    this._setHandlers();
  }

  _setHandlers() {
    this._confirmForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }

  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }
}
