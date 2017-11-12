'use strict';

const message = document.querySelector('#message');

const upload = (evt) => {
    evt.preventDefault();
    message.innerHTML = 'Upload in progress...';
    const input = document.querySelector('input[type="file"]');

    const data = new FormData();
    data.append('fileToUpload', input.files[0]);

    fetch('upload.php', {
        method: 'POST',
        body: data
    }).then((response) => {
        return response.text();
    }).then((text) => {
        message.innerHTML = text;
    });
};

document.querySelector('form').addEventListener('submit', upload);