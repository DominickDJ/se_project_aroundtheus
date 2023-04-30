export const initialCards = [
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

export const selectors = {
  cardSection: "gallery__cards",
  cardTemplate: ".card-template",
  previewPopup: "modal_preview",
};

// // Edit Modal
// editCloseButton.addEventListener("click", () =>
//   closeModal(editProfileModalContainer)
// );
// editProfileButton.addEventListener("click", function () {
//   nameInput.value = profileTitle.textContent;
//   descriptionInput.value = profileDescription.textContent;
//   openModal(editProfileModalContainer);
// });
// editProfileModalContainer.addEventListener("submit", (event) => {
//   event.preventDefault();
//   profileDescription.textContent = descriptionInput.value;
//   profileTitle.textContent = nameInput.value;
//   closeModal(editProfileModalContainer);
//   editFormValidator.toggleButtonState();
// });

// // Add Modal
// addCloseButton.addEventListener("click", () => closeModal(addProfileModal));
// addProfileButton.addEventListener("click", function () {
//   openModal(addProfileModal);
// });
// addProfileModal.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const cardData = {
//     name: titleInput.value,
//     link: imageInput.value,
//   };

//   renderCard(cardData, cardGallery);
//   closeModal(addProfileModal);
//   addForm.reset();
//   addFormValidator.toggleButtonState();
// });

// // Array Data
// const renderCard = (data, cardGallery) => {
//   const card = new Card(data, "#card-template");
//   cardGallery.prepend(card.getView());
// };

// initialCards.forEach((cardData) => {
//   renderCard(cardData, cardGallery);
// });
