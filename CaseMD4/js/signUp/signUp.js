$(document).ready(function () {
    let SignUpForm = {};
    let usernameExisted = {
        message: "username_existed"
    }
    let emailExisted = {
        message: "email_existed"
    }
    let createSuccess = {
        message: "yes"
    }
    $('#btn-create-account').click(function () {
        if ($('#password').val() === $('#confirm').val()) {
            SignUpForm.name = $('#name').val();
            SignUpForm.username = $('#username').val();
            SignUpForm.password = $('#password').val();
            SignUpForm.confirm = $('#confirm').val();
            SignUpForm.email = $('#email').val();
            SignUpForm.roles = ["USER"];
            let signUpFormOBJ = JSON.stringify(SignUpForm);
            console.log('signUpFormOBJ === ', signUpFormOBJ)
            $.ajax({
                url: 'http://localhost:8080/api/auth/signup',
                method: 'POST',
                data: signUpFormOBJ,
                contentType: 'application/json; charset=utf8',
                success: function (data) {
                    console.log('data ===', data);
                    if (JSON.stringify(data) == JSON.stringify(usernameExisted)) {
                        document.getElementById('status').innerHTML = 'The username is existed! Please try again!'
                    }
                    if (JSON.stringify(data) == JSON.stringify(emailExisted)) {
                        document.getElementById('status').innerHTML = 'The Email is existed! Please try again!'
                    }
                    if (JSON.stringify(data) == JSON.stringify(createSuccess)) {
                        document.getElementById('status').innerHTML = 'Create User Account Success!'
                    }
                }
            })
        } else {
            document.getElementById('status').innerHTML = 'mat khau xac nhan ko trung`'
        }

    })
})