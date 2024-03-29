import "./index.css";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import { selectors, validationConfig } from "../utils/Constants.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm";

// API
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "36d4ccce-10c3-4fd1-8e69-65692c768133",
    "Content-Type": "application/json",
  },
});

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

// avatar
const openAvatarPopupButton = document.querySelector(".profile__image-edit");
openAvatarPopupButton.addEventListener("click", () => {
  avatarFormValidator.resetValidation();
  avatarModal.open();
});

// Form Validator
const editForm = document.querySelector("#edit-form");
const editFormValidator = new FormValidator(validationConfig, editForm);
editFormValidator.enableValidation();
const addProfileModal = document.querySelector("#add-modal");
const addForm = addProfileModal.querySelector("#add-form");
const addFormValidator = new FormValidator(validationConfig, addForm);
addFormValidator.enableValidation();
const avatarForm = document.querySelector("#avatar-form");
const avatarFormValidator = new FormValidator(validationConfig, avatarForm);
avatarFormValidator.enableValidation();

// User Info
const user = new UserInfo(
  ".profile__title",
  ".profile__description",
  ".profile__image"
);

let userId;
let cardSection;
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, cards]) => {
    const { name, about, avatar } = data;
    user.setUserInfo({ name, about });
    user.setAvatar(avatar);
    userId = data._id;
    cardSection = new Section(
      {
        items: cards,
        renderer: renderCard,
      },
      selectors.cardSection
    );
    cardSection.renderItems();
  })
  .catch((err) => {
    console.error(err);
  });

const renderCard = (data) => {
  const cardElement = new Card(
    {
      data,
      userId,
      handleImageClick: (imageData) => {
        cardPreview.open(imageData);
      },
      handleDeleteClick: () => {
        confirmDeleteModal.open();
        confirmDeleteModal.setSubmitAction(() => {
          api
            .deleteCard(data._id)
            .then((res) => {
              cardElement.remove(res);
              confirmDeleteModal.close();
            })
            .catch((error) => {
              console.error(error);
            });
        });
      },
      handleLikeCard: (id) => {
        const isLiked = cardElement.isLiked();
        api
          .changeLikeNumber(id, isLiked)
          .then((res) => {
            cardElement.setLikes(res.likes);
          })
          .catch((error) => {
            console.error(error);
          });
      },
    },
    selectors.cardTemplate
  );

  const newCard = cardElement.getView();
  cardSection.addItem(newCard);
};

// Popup with Image
const cardPreview = new PopupWithImage({
  popupSelector: "#picture-modal",
});

// Popup with form
const newCardPopup = new PopupWithForm({
  popupSelector: "#add-modal",
  handleFormSubmit: (inputValues) => {
    newCardPopup.renderLoading(true);
    api
      .addCard(inputValues.name, inputValues.link)
      .then((response) => {
        newCardPopup.close();
        renderCard(response);
      })
      .finally(() => {
        newCardPopup.renderLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  },
});
const editProfileModal = new PopupWithForm({
  popupSelector: "#edit-modal",
  handleFormSubmit: (inputValues) => {
    editProfileModal.renderLoading(true);
    api
      .changeUserInfo(inputValues.userName, inputValues.userJob)
      .then((data) => {
        editProfileModal.close();
        user.setUserInfo(data);
      })
      .finally(() => {
        editProfileModal.renderLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  },
});
const avatarModal = new PopupWithForm({
  popupSelector: "#avatar-modal",
  handleFormSubmit: (id) => {
    avatarModal.renderLoading(true);
    api
      .setAvatar(id)
      .then((res) => {
        user.setAvatar(res.avatar);
        avatarModal.close();
      })
      .finally(() => {
        avatarModal.renderLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  },
});
//Popup with Confirm
const confirmDeleteModal = new PopupWithConfirm({
  popupSelector: "#confirm-modal",
  handleFormSubmit: (id) => {
    api
      .deleteCard(id)
      .then(() => {
        confirmDeleteModal.close();
      })
      .catch((error) => {
        console.error(error);
      });
  },
});
