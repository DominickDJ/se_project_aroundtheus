import Popup from "./Popup";
import "../pages/index";
export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
  }
  open(data) {
    this._modalPicture = this._popupElement.querySelector(".modal__picture");
    this._modalPictureDescription = this._popupElement.querySelector(
      ".modal__picture-description"
    );
    this._modalPicture.src = data.link;
    this._modalPicture.alt = `Photo of ${data.name}`;
    this._modalPictureDescription.textContent = data.name;
    super.open();
  }
}
