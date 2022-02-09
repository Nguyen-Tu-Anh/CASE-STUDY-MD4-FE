$(document).ready(function () {
    let SignInForm = {};
    $('#btn-login').click(function () {
        SignInForm.username = $('#username').val();
        SignInForm.password = $('#password').val();
        let signInFormOBJ = JSON.stringify(SignInForm);
        console.log('signInFormOBJ == ',signInFormOBJ)
        $.ajax({
            url: 'http://localhost:8080/api/auth/signin',
            method: 'POST',
            data: signInFormOBJ,
            contentType: 'application/json; charset=utf8',
            success: function (data) {
                console.log('data login ===> ', data)
                window.sessionStorage.removeItem('TOKEN_KEY')
                window.sessionStorage.setItem('TOKEN_KEY',data.token);
                window.sessionStorage.removeItem('USER_KEY')
                window.sessionStorage.setItem('USER_KEY',JSON.stringify(data.users));

                window.open(window.location.href);
            }
        })
    })
})