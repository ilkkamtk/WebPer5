const openButtons = document.querySelectorAll('.open-modal');
const closeButtons = document.querySelectorAll('.close-modal');

const openModal = (evt) => {
  evt.preventDefault();
  console.log(evt.currentTarget);
  fetch(evt.currentTarget.href).then((response) => {
    return response.json();
  }).then((json) => {
    document.querySelector('.modal-content').innerHTML = `<img src="${json.image}"><p>${json.text}</p>`;
    document.querySelector('.modal').classList.replace('hide', 'show');
  });
};

const closeModal = (evt) => {
  evt.preventDefault();
  console.log(this.parentElement);
  this.parentElement.classList.replace('show', 'hide');
};

openButtons.forEach((button) => {
  button.addEventListener('click', openModal);
});

// vaihtoehto forEachille
for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', closeModal);
}