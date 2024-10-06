$(document).ready(function () {
    const username = 'rromero890';
    const url = `https://api.github.com/users/rromero890/repos`;

    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            data.forEach(repo => {
                $('#repos-list').append(`<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`);
            });
        },
        error: function () {
            $('#repos-list').append('<li>Failed to retrieve repositories.</li>');
        }
    });
});
