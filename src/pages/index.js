import "./index.css";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import {
  initialCards,
  selectors,
  validationConfig,
} from "../utils/Constants.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";

// Popup Buttons
const openEditPopupButton = document.querySelector(".profile__edit-button");
openEditPopupButton.addEventListener("click", () => {
  const userData = user.getUserInfo();
  editFormValidator.resetValidation();
  editProfileModal.open();
  editProfileModal.setInputValues(userData);
});
const openAddPopupButton = document.querySelector(".profile__add-button");
openAddPopupButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
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

// Card
const renderCard = (data) => {
  const cardElement = new Card(
    {
      data,
      handleImageClick: (imageData) => {
        cardPreview.open(imageData);
      },
    },
    selectors.cardTemplate
  );
  const newCard = cardElement.getView();
  cardSection.addItem(newCard);
};
// Section
const cardSection = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  selectors.cardSection
);
cardSection.renderItems();

// Popup with Image
const cardPreview = new PopupWithImage({
  popupSelector: "#picture-modal",
});

// Popup with form
const newCardPopup = new PopupWithForm({
  popupSelector: "#add-modal",
  handleFormSubmit: (inputValues) => {
    renderCard(inputValues);
    newCardPopup.close();
  },
});
const editProfileModal = new PopupWithForm({
  popupSelector: "#edit-modal",
  handleFormSubmit: (inputValues) => {
    user.setUserInfo(inputValues);
    editProfileModal.close();
  },
});

// User Info
const user = new UserInfo(".profile__title", ".profile__description");
