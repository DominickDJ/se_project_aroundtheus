import { pictureModal, imageInput } from "./utils.js";

export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteButton();
      });
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this.handleCardClick();
      });
  }

  _handleLikeicon() {
    this._cardElement
      .querySelector(".card__like_button")
      .classlist.toggle(".card_like_button-clicked");
  }
  _handleDeleteButton() {
    this._cardElement.remove;
    this._cardElement = null;
  }

  _handleCardClick() {
    modalPicture.src = data.link;
    modalPicture.alt = `Photo of ${data.name}`;
    modalPictureDescription.textContent = data.name;
    openModal(pictureModal);
  }
  generateCard() {
    this._cardElement = this._getView();
    this._setEventListeners();
    this._cardElement.querySelector(".card_image").cardImage.src = this._link;
    this._cardElement.querySelector("card_title").textContent = this._name;
    return this._cardElement;
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._setEventListeners();
  }
}
