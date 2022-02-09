let token = window.sessionStorage.getItem("TOKEN_KEY");

$(document).ready(function () {
    getCartList()
})

function getCartList() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/cart/list",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function (data) {
            let total = 0;
            let str = "";
            for (let i = 0; i < data.length; i++) {
                str += `
                <tr>
                    <td class="align-middle"><img src="${data[i].product.image}" alt="" style="width: 50px;"> ${data[i].product.nameProduct}</td>
                    <td class="align-middle">${data[i].product.price}</td>
                    <td class="align-middle">
                        <div class="input-group quantity mx-auto" style="width: 100px;">
                            <div class="input-group-btn">
                                <button onclick="updateQuantity(${data[i].product.id}, ${data[i].quantity - 1})" class="btn btn-sm btn-primary btn-minus" >
                                    <i class="fa fa-minus"></i>
                                </button>
                            </div>
                            <input type="text" class="form-control form-control-sm bg-secondary text-center" value="${data[i].quantity}">
                            <div class="input-group-btn">
                                <button onclick="updateQuantity(${data[i].product.id}, ${data[i].quantity + 1})" class="btn btn-sm btn-primary btn-plus">
                                    <i class="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </td>
                    <td class="align-middle">${data[i].subtotal}</td>
                    <td class="align-middle"><button onclick="deleteCartItem(${data[i].id})" class="btn btn-sm btn-primary"><i class="fa fa-times"></i></button></td>
                </tr>
                `
                total += data[i].subtotal;
            }
            document.getElementById("cartItem").innerHTML = str;
            document.getElementById("total").innerHTML = total;
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function deleteCartItem(id) {
    $.ajax({
        type: "DELETE",
        url: 'http://localhost:8080/cart/delete/' + id,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function () {
            window.location.href = 'cart.html'
        },
        error: function (error) {
            alert(error);
        }
    })
}

function updateQuantity(pid, newQuantity) {
    $.ajax({
        type: "GET",
        url: 'http://localhost:8080/cart/update/' + pid + "/" + newQuantity,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: function (data) {
            let str = "";
            for (let i = 0; i < data.length; i++) {
                str += `
                <tr>
                    <td class="align-middle"><img src="${data[i].product.image}" alt="" style="width: 50px;"> ${data[i].product.nameProduct}</td>
                    <td class="align-middle">${data[i].product.price}</td>
                    <td class="align-middle">
                        <div class="input-group quantity mx-auto" style="width: 100px;">
                            <div class="input-group-btn">
                                <button onclick="updateQuantity(${data[i].product.id}, ${data[i].quantity - 1})" class="btn btn-sm btn-primary btn-minus" >
                                    <i class="fa fa-minus"></i>
                                </button>
                            </div>
                            <input type="text" class="form-control form-control-sm bg-secondary text-center" value="${data[i].quantity}">
                            <div class="input-group-btn">
                                <button onclick="updateQuantity(${data[i].product.id}, ${data[i].quantity + 1})" class="btn btn-sm btn-primary btn-plus">
                                    <i class="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </td>
                    <td class="align-middle">${data[i].subtotal}</td>
                    <td class="align-middle"><button onclick="deleteCartItem(${data[i].id})" class="btn btn-sm btn-primary"><i class="fa fa-times"></i></button></td>
                </tr>
                `
            }
            document.getElementById("cartItem").innerHTML = str;
        },
        error: function (error) {
            console.log(error);
        }
    })
}