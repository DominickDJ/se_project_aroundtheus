import Card from "../scripts/components.js";
import "../pages/index.css";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import Section from "../scripts/Section.js";
import { initialCards, selectors } from "../utils/Constants.js";
import UserInfo from "../scripts/UserInfo.js";
import FormValidator from "../scripts/FormValidator.js";
import Popup from "../scripts/Popup.js";
import { validationConfig } from "../utils/Constants.js";

// Pop Button
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
const editForm = document.querySelector("#edit-form");
const editFormValidator = new FormValidator(validationConfig, editForm);
editFormValidator.enableValidation();
const addProfileModal = document.querySelector("#add-modal");
const addForm = addProfileModal.querySelector("#add-form");
const addFormValidator = new FormValidator(validationConfig, addForm);
addFormValidator.enableValidation();

// Popup
const newImagePopup = new Popup({
  popupSelector: "#picture-modal",
});


// Popup with Image
const cardPreview = new PopupWithImage({
  popupSelector: "#picture-modal",
});


// Popup with form
const newCardPopup = new PopupWithForm({
  popupSelector: "#add-modal",
  handleFormSubmit: (inputValues) => {
    cardSection.renderItems(inputValues);
    newCardPopup.close();
  },
});
newCardPopup.close();
const editProfileModal = new PopupWithForm({
  popupSelector: "#edit-modal",
  handleFormSubmit: (inputValues) => {
    user.setUserInfo(inputValues);
    editProfileModal.close();
  },
});
editProfileModal.close();
// Section / Card
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const cardElement = new Card(
        {
          data,
          handleImageClick: (imageData) => {
            cardPreview.open(imageData);
          },
        },
        selectors.cardTemplate
      );
      cardSection.addItem(cardElement.getView());
    },
  },
  selectors.cardSection
);
cardSection.renderItems();

// User Info
const user = new UserInfo(".profile__title", ".profile__description");
