import { data } from "autoprefixer";
import "./index";
import Popup from "./Popup";
export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._modalPicture = this._popupElement.querySelector(".modal__picture");
    this._modalPictureDescription = this._popupElement.querySelector(
      ".modal__picture-description"
    );
  }
  open(data) {
    this._modalPicture.src = data.link;
    this._modalPicture.alt = `Photo of ${data.name}`;
    this._modalPictureDescription.textContent = data.name;
    super.open();
  }
  close() {
    super.close();
  }
}
