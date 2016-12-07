var openButtons = document.querySelectorAll('.open-modal');
var closeButtons = document.querySelectorAll('.close-modal');

var openModal = function(evt) {
    evt.preventDefault();
    console.log(this.href);
    fetch(this.href).then(function(response) {
        return response.json();
    }).then(function(json) {
        document.querySelector('.modal-content').innerHTML = '<img src="' + json.image + '"><p>' + json.text + '</p>';
        document.querySelector('.modal').classList.remove('hide');
        document.querySelector('.modal').classList.add('show');
    });
}

var closeModal = function(evt) {
    evt.preventDefault();
    console.log(this.parentElement);
    this.parentElement.classList.remove('show');
    this.parentElement.classList.add('hide');
}


for (var i = 0; i < openButtons.length; i++) {
    openButtons[i].addEventListener('click', openModal);
}

for (var j = 0; j < closeButtons.length; j++) {
    closeButtons[j].addEventListener('click', closeModal);
}