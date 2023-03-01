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
const modal = document.querySelector(".modal");
const modalContainer = modal.querySelector(".modal__container");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = modalContainer.querySelector(".close__button");
const profileTitle = document.querySelector(".profile__title");
const profiledescription = document.querySelector(".profile__description");
const saveProfileButton = document.querySelector(
  "#edit-profile-modal .form__button"
);

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
