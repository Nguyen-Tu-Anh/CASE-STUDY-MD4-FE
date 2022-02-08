$(document).ready(function () {
    showCategory()
})

function showCategory() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/product/1",
        success: function (data) {
            let str = "";

            for (let i = 0; i < data.length; i++) {
                str += `<div class="col-md-3 product-men women_two shop-gd">
                                <div class="product-googles-info googles">
                                    <div class="men-pro-item">
                                        <div class="men-thumb-item">
                                            <img src="${data[i].image}"
                                                 class="img-fluid" alt="">
                                            <div class="men-cart-pro">
                                                <div class="inner-men-cart-pro">
                                                    <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                </div>
                                            </div>
                                            <span class="product-new-top">New</span>
                                        </div>
                                        <div class="item-info-product">
                                            <div class="info-product-price">
                                                <div class="grid_meta">
                                                    <div class="product_price">
                                                        <h4>
                                                            <a href="single.html">${data[i].nameProduct}</a>
                                                        </h4>
                                                        <div class="grid-price mt-2">
                                                            <span class="money ">${data[i].price} triệu USD</span>
                                                        </div>
                                                    </div>
                                                    <ul class="stars">
                                                        <li>
                                                            <a href="#">
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i class="fa fa-star-half-o" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="googles single-item hvr-outline-out">
                                                        <button onclick="addProductToCart(${data[i].id})" type="submit" class="googles-cart pgoogles-cart">
                                                            <i class="fas fa-cart-plus"></i>
                                                        </button>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>`
            }
            document.getElementById("products").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })
}