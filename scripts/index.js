// Arrays
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

// Variables
const editProfileModal = document.querySelector("#edit-modal");
const modalContainer = editProfileModal.querySelector(".modal__container");
const editButton = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profiledescription = document.querySelector(".profile__description");
const cardGallery = document.querySelector(".gallery__cards");
const nameInput = editProfileModal.querySelector("#name-input");
const descriptionInput = editProfileModal.querySelector("#description-input");
const editCloseButton = editProfileModal.querySelector(".modal__close-button");
const addProfileModal = document.querySelector("#add-modal");
const addButton = document.querySelector(".profile__add-button");
const addCloseButton = addProfileModal.querySelector(".modal__close-button");
const cardTitle = document.querySelector(".card__title");
const titleInput = document.querySelector("#title-input");
const imageInput = document.querySelector("#image-input");
const cardImage = document.querySelector(".card__image");

// Funtions
function getCardElement(data) {
  let cardTemplate = document.querySelector("#cards").content.cloneNode(true);
  let cardElement = cardTemplate.querySelector(".card");
  let cardImage = cardElement.querySelector(".card__image");
  let cardTitle = cardElement.querySelector(".card__title");
  let cardLikeButton = cardElement.querySelector(".card__like-button");
  let cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardElement.remove(
    cardDeleteButton.addEventListener("click", (event) => {
      cardDeleteButton.classList.toggle(".card");
    })
  );

  cardLikeButton.addEventListener("click", (event) => {
    cardLikeButton.classList.toggle("card__like_button-clicked");
  });
  cardImage.src = data.link;
  cardTitle.textContent = data.name;
  cardImage.alt = data.name;
  return cardElement;
}
function closeModal(modal) {
  modal.classList.remove("modal_opened");
}
function openModal(modal) {
  modal.classList.add("modal_opened");
}

// Edit Modal
editCloseButton.addEventListener("click", () => closeModal(editProfileModal));
editButton.addEventListener("click", function () {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profiledescription.textContent;
  openModal(editProfileModal);
});
editProfileModal.addEventListener("submit", (event) => {
  profiledescription.textContent = descriptionInput.value;
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  closeModal(editProfileModal);
});

// Add Modal
addCloseButton.addEventListener("click", () => closeModal(addProfileModal));
addButton.addEventListener("click", function () {
  openModal(addProfileModal);
});
addProfileModal.addEventListener("submit", (event) => {
  cardTitle.textContent = titleInput.value;
  event.preventDefault();
  cardImage.textContent = imageInput.value;
  closeModal(addProfileModal);
});

// Picture Modal

// Array Data
initialCards.forEach((cardData) => {
  cardGallery.append(getCardElement(cardData));
});
