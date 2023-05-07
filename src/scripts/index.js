import Card from "./Card.js";
import "../pages/index.css";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import { initialCards, selectors } from "../utils/Constants.js";
import UserInfo from "./UserInfo.js";
import FormValidator from "./FormValidator.js";
import Popup from "./Popup.js";

const addProfileModal = document.querySelector("#add-modal");

// Popup
const newImagePopup = new Popup({
  popupSelector: "#picture-modal",
});
newImagePopup.setEventListeners();

// Popup with Image
const CardPreview = new PopupWithImage({
  popupSelector: "#picture-modal",
});
CardPreview.setEventListeners();

// Section / Card
const CardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const cardElement = new Card(
        {
          data,
          handleImageClick: (imageData) => {
            CardPreview.open(imageData);
          },
        },
        selectors.cardTemplate
      );
      CardSection.addItem(cardElement.getView());
    },
  },
  selectors.cardSection
);
CardSection.renderItems();

// User Info
const user = new UserInfo(".profile__title", ".profile__description");

// Popup with form
const newCardPopup = new PopupWithForm({
  popupSelector: "#add-modal",
  handleFormSubmit: () => {},
});
newCardPopup.setEventListeners();
const editProfileModal = new PopupWithForm({
  popupSelector: "#edit-modal",
  handleFormSubmit: ({ name, job }) => {
    user.setUserInfo({ name, job });
  },
});
editProfileModal.setEventListeners();

const openEditPopupButton = document.querySelector(".profile__edit-button");
openEditPopupButton.addEventListener("click", () => {
  user.getUserInfo();
  editProfileModal.open();
});
const openAddPopupButton = document.querySelector(".profile__add-button");
openAddPopupButton.addEventListener("click", () => {
  newCardPopup.open();
});
// Form Validator
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
const addForm = addProfileModal.querySelector("#add-form");
const addFormValidator = new FormValidator(validationConfig, addForm);
addFormValidator.enableValidation();
