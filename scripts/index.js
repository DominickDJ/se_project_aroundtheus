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
const closeButton = document.querySelector(".modal__close-button");
const profileTitle = document.querySelector(".profile__title");
const profiledescription = document.querySelector(".profile__description");
const cardGallery = document.querySelector(".gallery__cards");
const nameInput = modal.querySelector("#name-input");
const descriptionInput = modal.querySelector("#description-input");

function closeModal() {
  modal.classList.remove("modal__container_opened");
}
function openModal() {
  modal.classList.add("modal__container_opened");
}

editButton.addEventListener("click", function () {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profiledescription.textContent;
  openModal();
});
closeButton.addEventListener("click", closeModal);

modal.addEventListener("submit", (event) => {
  profiledescription.textContent = descriptionInput.value;
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  closeModal(modal);
});

for (let i = 0; i < initialCards.length; i++) {
  const card = getCardElement(initialCards[i]);
  cardGallery.append(card);
}
