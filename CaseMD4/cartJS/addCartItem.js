function addProductToCart(pid) {
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/cart/add/" + pid,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function () {
            alert("Them vao` gio hang thanh cong")
        },
        error: function (err) {
            console.log(err)
        }
    })
}