import Popup from "./Popup";
export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._inputList = this._popupElement.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;
    this._handleSubmit = this._handleSubmit.bind(this);
    this._submitBtn = this._popupElement.querySelector(".modal__button");
    this._submitBtnText = this._submitBtn.textContent;
  }

  renderLoading(isLoading, loadingText = "Saving...") {
    if (isLoading) {
      this._submitBtn.textContent = loadingText;
    } else {
      this._submitBtn.textContent = this._submitBtnText;
    }
  }
  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }
  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  _handleSubmit() {
    this._handleFormSubmit(this._getInputValues());
  }

  open() {
    this._popupForm.addEventListener("submit", this._handleSubmit);
    super.open();
  }
  close() {
    this._popupForm.removeEventListener("submit", this._handleSubmit);
    this._popupForm.reset();
    super.close();
  }
}
