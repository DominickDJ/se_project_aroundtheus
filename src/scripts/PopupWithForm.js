import Popup from "./Popup";
export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._inputList = this._popupElement.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;

    this._submitHandler = this._submitHandler.bind(this);
  }
  _getInputValues() {
    const formvalues = {};
    this._inputList.forEach((input) => {
      formvalues[input.name] = input.value;
    });
    return formvalues;
  }

  _submitHandler()  {
    this._handleFormSubmit(this._getInputValues());
  }

  open() {
    this._popupForm.addEventListener("submit", this._submitHandler);
    super.open();
  }
  close() {
    this._popupForm.removeEventListener("submit", this._submitHandler);
    this._popupForm.reset();
    super.close();
  }
}
