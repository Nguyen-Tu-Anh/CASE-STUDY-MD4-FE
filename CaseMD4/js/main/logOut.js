if (window.sessionStorage.getItem('TOKEN_KEY') !== null) {
    $('#hiddenLogin').attr('hidden', true)
    $('#usernamee').attr('hidden', false)
    $('#logout').attr('hidden', false)

    let user = JSON.parse(window.sessionStorage.getItem('USER_KEY'))
    let name = user.name
    let avatar = user.avatar
    $('#nameOfUser').text(name)
    $('#userAvatar').attr('src', avatar).attr('class', 'header__navbar-user-img')
} else {
    $('#hiddenLogin').attr('hidden', false)
    $('#usernamee').attr('hidden', true)
    $('#logout').attr('hidden', true)
}

function logOut() {
    window.sessionStorage.removeItem('TOKEN_KEY')
    window.sessionStorage.removeItem('USER_KEY')

    window.location.href = 'index.html'
}