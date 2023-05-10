import Popup from "./Popup";
export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._inputList = this._popupForm.querySelectorAll(".modal_input");
    this._handleFormSubmit = handleFormSubmit;
  }
  _getInputValues() {
    const formvalues ={};
    this._inputList.forEach((input) => {
        formvalues[input.name] = input.value;
    })
    return formvalues;
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
