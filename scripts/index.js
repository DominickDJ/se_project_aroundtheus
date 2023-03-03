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

function getCardElement(data) {
  let cardTemplate = document.querySelector("#cards").content.cloneNode(true);
  let cardElement = cardTemplate.querySelector(".card");
  let cardImage = cardElement.querySelector(".card__image");
  let cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = data.link;
  cardTitle.textContent = data.name;
  cardImage.alt = data.name;
  return cardElement;
}

const modal = document.querySelector(".modal");
const modalContainer = modal.querySelector(".modal__container");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = modalContainer.querySelector(".close__button");
const profileTitle = document.querySelector(".profile__title");
const profiledescription = document.querySelector(".profile__description");
const saveProfileButton = document.querySelector(
  "#edit-profile-modal .form__button"
);
const cardGallery = document.querySelector(".gallery__cards");

editButton.addEventListener("click", function () {
  const nameInput = modal.querySelector("#name-input");
  nameInput.value = profileTitle.textContent;
  const descriptionInput = modal.querySelector("#description-input");
  descriptionInput.value = profiledescription.textContent;
  modal.classList.add("modal__opened");
});
closeButton.addEventListener("click", function () {
  modal.classList.remove("modal__opened");
});
console.log(saveProfileButton);
saveProfileButton.addEventListener("click", (event) => {
  const descriptionInput = modal.querySelector("#description-input");
  event.preventDefault();
  profiledescription.textContent = descriptionInput.value;
  const nameInput = modal.querySelector("#name-input");
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  modal.classList.remove("modal__opened");
});

for (let i = 0; i < initialCards.length; i++) {
  const card = getCardElement(initialCards[i]);
  cardGallery.append(card);
}
