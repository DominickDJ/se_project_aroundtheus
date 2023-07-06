export default class Card {
  constructor(
    { data, userId, handleImageClick, deleteCard, handleDeleteButton },
    cardSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteButton = handleDeleteButton;
    this._id = data._id;
    this._userId = userId;
    this._deleteCard = deleteCard;
    this._likes = data.likes;
    this._owner = data.owner;
  }

  getId() {
    return this._id;
  }
  isLiked() {
    return this._likes.some((like) => like._id === this._userId);
  }
  setLikes(likes) {
    this._likes = likes;
    this.renderLikes();
  }
  _renderLikes() {
    this._likesAmount = this._cardElement.querySelector(".card__like-number");
    this._likesAmount.textContent = this._likes.length;
    if (this.isLiked()) {
      this._cardElement
        .querySelector(".card__like-button")
        .classList.add("card__like-button_clicked");
    } else {
      this._cardElement
        .querySelector(".card__like-button")
        .classList.remove("card__like-button_clicked");
    }
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
        this._handleDeleteButton(this.getId());
      });
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleImageClick({ link: this._link, text: this._text });
      });
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_clicked");
  }

  _handleImageClick() {
    modalPicture.src = this._link;
    modalPicture.alt = `Photo of ${this._name}`;
    modalPictureDescription.textContent = this._name;
    open(pictureModal);
  }
  
  _hideDeleteIcon() {
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    if (this._userId !== this._owner._id) {
      this._deleteButton.classList.add("card__delete-button-hidden");
    }
  }
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__image").alt = this._name;
    this._cardElement.querySelector(".card__title").textContent = this._name;
    this._hideDeleteIcon();
    this._renderLikes();
    return this._cardElement;
  }

  remove() {
    this._cardElement.remove();
    this._cardElement = null;
  }
}
