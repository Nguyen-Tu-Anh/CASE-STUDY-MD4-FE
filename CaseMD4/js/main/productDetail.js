let url_string = window.location.href;
let url = new URL(url_string);
let id = url.searchParams.get("id");

$(document).ready(function () {
    findProductById()
})

function findProductById() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/products/" + id,
        //xử lý khi thành công
        success: function (data) {
            document.getElementById("id").value = data.id;
            document.getElementById("name").innerHTML = data.nameProduct;
            document.getElementById("price").innerHTML = data.price;
            document.getElementById("quantity").innerHTML = data.quantity;
            document.getElementById("description").innerHTML = data.description;
            $('#image').attr('src', data.image)

            let str = "";
                str += `
                    <div class="googles single-item singlepage">
                        <button onclick="addProductToCart(${data.id})" class="googles-cart pgoogles-cart">
                            Add to Cart
                        </button>
                    </div>
                `
            document.getElementById("addToCart").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })
}
