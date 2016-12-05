var message = document.querySelector('#message');

var upload = function(evt) {
    evt.preventDefault();
    message.innerHTML = 'Upload in progress...';
    var input = document.querySelector('input[type="file"]');

    var data = new FormData();
    data.append('fileToUpload', input.files[0]);

    fetch('upload.php', {
        method: 'POST',
        body: data
    }).then(function(response) {
        return response.text();
    }).then(function(text) {
        message.innerHTML = text;
    });
}

document.querySelector('form').addEventListener('submit', upload);