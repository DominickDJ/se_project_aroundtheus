// Arrays
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
    name: "Pleasure Pier",
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

// Variables
const editProfileModal = document.querySelector("#edit-modal");
const modalContainer = editProfileModal.querySelector(".modal__container");
const editButton = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
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
const modalPicture = document.querySelector(".modal__picture");
const modalPictureDescription = document.querySelector(
  ".modal__picture-description"
);
const pictureModal = document.querySelector("#picture-modal");
const pictureCloseButton = pictureModal.querySelector(".modal__close-button");
const cardImage = document.querySelector(".card__image");

// Funtions
function getCardElement(data) {
  let cardTemplate = document.querySelector("#cards").content.cloneNode(true);
  let cardElement = cardTemplate.querySelector(".card");
  let cardImage = cardElement.querySelector(".card__image");
  let cardTitle = cardElement.querySelector(".card__title");
  let cardLikeButton = cardElement.querySelector(".card__like-button");
  let cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", (event) => {
    cardElement.remove();
  });

  // Picture Modal
  cardImage.addEventListener("click", (event) => {
    modalPicture.src = data.link;
    modalPictureDescription.textContent = data.name;
    openModal(pictureModal);
  });
  pictureCloseButton.addEventListener("click", () => closeModal(pictureModal));

  // Like Button
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
  descriptionInput.value = profileDescription.textContent;
  openModal(editProfileModal);
});
editProfileModal.addEventListener("submit", (event) => {
  profileDescription.textContent = descriptionInput.value;
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
  let cardData = {
    name: titleInput.value,
    link: imageInput.value,
  };
  event.preventDefault();
  cardGallery.prepend(getCardElement(cardData));
  closeModal(addProfileModal);
});

// Array Data
initialCards.forEach((cardData) => {
  cardGallery.append(getCardElement(cardData));
});
