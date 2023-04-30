import Card from "./Card.js";
import "../pages/index.css";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import { initialCards, selectors } from "../utils/Constants.js";

const newCardPopup = new PopupWithForm({
  popupSelector: "#add-modal",
  handleFormSubmit: () => {},
});
newCardPopup.open();
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
const addProfileModal = document.querySelector("#add-modal");
const addForm = addProfileModal.querySelector("#add-form");
const addFormValidator = new FormValidator(validationConfig, addForm);
addFormValidator.enableValidation();
