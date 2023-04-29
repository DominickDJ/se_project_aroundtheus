import Card from "./Card.js";
import "../pages/index.css";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import { initialCards, selectors } from "../utils/Constants.js";

const newCardPopup = new PopupWithForm("#add-modal", () => {});
newCardPopup.openModal();
const CardPreview = new PopupWithImage(selectors.previewPopup);
const CardSection = new Section(
  {
    renderer: (data) => {
      const cardElement = new Card(
        {
          data,
          handleImageClick: (imageData) => {
            CardPreview.open(imageData);
          },
        },
        selectors.cardTemplate,
        handleClick
      );
      CardSection.addItem(cardElement.getView());
    },
  },
  selectors.cardSection
);

CardSection.renderItems(initialCards);
CardPreview.setEventListeners();


const pictureModal = document.querySelector("#picture-modal");
const modalPicture = document.querySelector(".modal__picture");
const modalPictureDescription = document.querySelector(
  ".modal__picture-description"
);
const editProfileButton = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const cardGallery = document.querySelector(".gallery__cards");
const nameInput = editProfileModalContainer.querySelector("#name-input");
const descriptionInput =
  editProfileModalContainer.querySelector("#description-input");
const editCloseButton = editProfileModalContainer.querySelector(
  ".modal__close-button"
);
const addProfileModal = document.querySelector("#add-modal");
const addSubmitButton = addProfileModal.querySelector(".modal__button");
const addProfileButton = document.querySelector(".profile__add-button");
const addCloseButton = addProfileModal.querySelector(".modal__close-button");
const addForm = addProfileModal.querySelector("#add-form");
const titleInput = document.querySelector("#title-input");
const imageInput = document.querySelector("#image-input");

const pictureCloseButton = pictureModal.querySelector(".modal__close-button");

const validationConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
const editForm = document.querySelector("#edit-form");
const editFormValidator = new FormValidator(validationConfig, editForm);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(validationConfig, addForm);
addFormValidator.enableValidation();
