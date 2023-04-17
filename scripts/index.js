import Card from "./card.js";
import FormValidator from "./FormValidator.js";
import { pictureModal, modalPicture, openModal, closeModal } from "./utils.js";

const initialCards = [
  {
    name: "Tokyo",
    link: "https://images.unsplash.com/photo-1678951310861-60299f9b0162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Golden Gate Bridge",
    link: "https://images.unsplash.com/photo-1603389865219-669a0768193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Pleasure Pier TX",
    link: "https://images.unsplash.com/photo-1598805291186-612c3ca482a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGxlYXN1cmUlMjBwaWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Oceanside CA",
    link: "https://images.unsplash.com/photo-1528521712081-0480efff6665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Yellowstone National Park",
    link: "https://images.unsplash.com/photo-1586968332704-0160550f3ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHllbGxvd3N0b25lJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Venice",
    link: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbHl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
  },
];
const cardData = {
  name: "Tokyo",
  link: "https://images.unsplash.com/photo-1678951310861-60299f9b0162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
};
const card = new Card(cardData, "#cards");
card.getView();

// Variables
const editProfileModalContainer = document.querySelector("#edit-modal");
const modalContainer =
  editProfileModalContainer.querySelector(".modal__container");
const editButton = document.querySelector(".profile__edit-button");
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
const addButton = document.querySelector(".profile__add-button");
const addCloseButton = addProfileModal.querySelector(".modal__close-button");
const addForm = addProfileModal.querySelector("#add-form");
const titleInput = document.querySelector("#title-input");
const imageInput = document.querySelector("#image-input");
const modalPictureDescription = document.querySelector(
  ".modal__picture-description"
);
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

pictureCloseButton.addEventListener("click", () => closeModal(pictureModal));

function getCardElement(data) {
  const cardTemplate = document.querySelector("#cards").content.cloneNode(true);
  const cardElement = cardTemplate.querySelector(".card");
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", (event) => {
    cardElement.remove();
  });

  // Picture card element
  cardImage.addEventListener("click", (event) => {
    modalPicture.src = data.link;
    modalPicture.alt = `Photo of ${data.name}`;
    modalPictureDescription.textContent = data.name;
    openModal(pictureModal);
  });

  // Like card element
  cardLikeButton.addEventListener("click", (event) => {
    cardLikeButton.classList.toggle("card__like_button-clicked");
  });
  cardImage.src = data.link;
  cardTitle.textContent = data.name;
  cardImage.alt = data.name;
  return cardElement;
}

// Edit Modal
editCloseButton.addEventListener("click", () =>
  closeModal(editProfileModalContainer)
);
editButton.addEventListener("click", function () {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
  openModal(editProfileModalContainer);
});
editProfileModalContainer.addEventListener("submit", (event) => {
  event.preventDefault();
  profileDescription.textContent = descriptionInput.value;
  profileTitle.textContent = nameInput.value;
  closeModal(editProfileModalContainer);
});

// Add Modal
addCloseButton.addEventListener("click", () => closeModal(addProfileModal));
addButton.addEventListener("click", function () {
  openModal(addProfileModal);
});
addProfileModal.addEventListener("submit", (event) => {
  event.preventDefault();
  const cardData = {
    name: titleInput.value,
    link: imageInput.value,
  };

  cardGallery.prepend(getCardElement(cardData));
  closeModal(addProfileModal);
  addForm.reset();
  toggleButtonState([titleInput, imageInput], addSubmitButton, config);
});

// Array Data
initialCards.forEach((cardData) => {
  cardGallery.append(getCardElement(cardData));
});
