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
import Api from "../components/Api.js";

// POPUP BUTTONS
//edit
const openEditPopupButton = document.querySelector(".profile__edit-button");
openEditPopupButton.addEventListener("click", () => {
  const userData = user.getUserInfo();
  editFormValidator.resetValidation();
  editProfileModal.open();
  editProfileModal.setInputValues(userData);
});
//add
const openAddPopupButton = document.querySelector(".profile__add-button");
openAddPopupButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  newCardPopup.open();
});
//confirm
// const openConfirmDeleteButton = document.querySelector("card__delete-button");
// openConfirmDeleteButton.addEventListener("click", () => {
//   confirmDeleteModal.open();
// });

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
const confirmDeleteModal = new PopupWithForm({
  popupSelector: "#confirm-modal",
  handleFormSubmit: () => {
    confirmDeleteModal.close();
  },
});
const avatarModal = new PopupWithForm({
  popupSelector: "#avatar-modal",
  handleFormSubmit: (inputValues) => {
    avatarModal.close(inputValues);
  },
});

// User Info
const user = new UserInfo(".profile__title", ".profile__description");

// API
// const api = new Api({
//   baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
//   headers: {
//     authorization: "36d4ccce-10c3-4fd1-8e69-65692c768133",
//     "Content-Type": "application/json",
//   },
// });

// api
//   .getInitialCards()
//   .then((result) => {
//     // process the result
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Token: 36d4ccce-10c3-4fd1-8e69-65692c768133
// Group ID: cohort-3-en
