const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const modalCloseButton = document.querySelector("#modal-close-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profile_titleInput = document.querySelector("#profile-title-input");
const profileTitleDescription = document.querySelector(
  "#profile-title-description",
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

console.log(profileEditButton);

function closePopup() {
  profileEditModal.classList.remove("modal-opened");
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profile_titleInput.value;
  profileDescription.textContent = profileTitleDescription.value;
  closePopup();
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  cardTitleEl.textContent = data.name;
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  return cardElement;
}
profileEditButton.addEventListener("click", () => {
  profile_titleInput.value = profileTitle.textContent;
  profileTitleDescription.value = profileDescription.textContent;
  profileEditModal.classList.add("modal-opened");
});

console.log(modalCloseButton);
modalCloseButton.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardListEl.append(cardElement);
});
